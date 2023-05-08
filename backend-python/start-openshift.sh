#!/bin/bash
DATE_TIME=$(date +'%Y-%m-%d %H:%M:%S.%3N')
cd app/src || exit
echo "Starting uvicorn at $DATE_TIME"
uvicorn main:app --host 0.0.0.0 --port 3000 --workers 1 --log-level info --server-header --date-header --limit-concurrency 1000
