#!/usr/bin/env bash

# BlueprintHub (블루프린트 허브) 관리 스크립트
# Port: 10194

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$APP_DIR/.app.pid"
LOG_FILE="$APP_DIR/app.log"
PORT=10194

cd "$APP_DIR" || exit 1

build_app() {
  echo "📦 [BlueprintHub] React Frontend 빌드 시작..."
  npm run build
  echo "✅ [BlueprintHub] 빌드 완료!"
}

start_app() {
  # 혹시 포트 점유 중인 다른 프로세스 정리
  OLD_PID=$(lsof -ti :$PORT 2>/dev/null)
  if [ -n "$OLD_PID" ]; then
    echo "⚠️ 포트 $PORT 점유 프로세스($OLD_PID) 정리 중..."
    kill -9 $OLD_PID 2>/dev/null || true
    sleep 1
  fi

  echo "🚀 [BlueprintHub] 서버 구동 중..."
  systemctl --user stop blueprint-hub.service 2>/dev/null || true
  systemd-run --user --unit=blueprint-hub node "$APP_DIR/server.mjs" > /dev/null 2>&1
  sleep 1

  PORT_PID=$(lsof -ti :$PORT 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    echo $PORT_PID > "$PID_FILE"
    echo "✅ [BlueprintHub] 실행 완료 (PID: $PORT_PID, Port: $PORT)"
  else
    nohup node "$APP_DIR/server.mjs" >> "$LOG_FILE" 2>&1 &
    NEW_PID=$!
    echo $NEW_PID > "$PID_FILE"
    echo "✅ [BlueprintHub] nohup 실행 완료 (PID: $NEW_PID, Port: $PORT)"
  fi
  echo "🔗 Local: http://172.30.1.70:$PORT/blueprint-hub/"
  echo "🌐 Public: https://kwopi.duckdns.org/blueprint-hub/"
}

stop_app() {
  systemctl --user stop blueprint-hub.service 2>/dev/null || true
  if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    echo "🛑 [BlueprintHub] 서버 종료 중 (PID: $PID)..."
    kill "$PID" 2>/dev/null || true
    rm -f "$PID_FILE"
  fi

  # 포트 정리
  PORT_PID=$(lsof -ti :$PORT 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    kill -9 $PORT_PID 2>/dev/null || true
  fi
  echo "✅ [BlueprintHub] 종료 완료"
}

status_app() {
  PORT_PID=$(lsof -ti :$PORT 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    echo "🟢 [BlueprintHub] 정상 실행 중 (PID: $PORT_PID, Port: $PORT)"
  else
    echo "🔴 [BlueprintHub] 정지 상태"
  fi
}

case "$1" in
  start)
    start_app
    ;;
  stop)
    stop_app
    ;;
  restart)
    stop_app
    sleep 1
    start_app
    ;;
  status)
    status_app
    ;;
  build)
    build_app
    ;;
  *)
    echo "사용법: $0 {start|stop|restart|status|build}"
    exit 1
    ;;
esac
