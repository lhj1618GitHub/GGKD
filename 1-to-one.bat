@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "TS_SOURCE_DIR=apps"
set "TS_OUTPUT=apps-all.ts"

if not exist "%TS_SOURCE_DIR%" (
    echo 错误：找不到 ts_files 文件夹
    pause
    exit /b 1
)

echo 正在清空输出文件...
echo. > "%TS_OUTPUT%"

set "first=1"
for %%f in ("%TS_SOURCE_DIR%\*.ts") do (
    if !first!==1 (
        type "%%f" >> "%TS_OUTPUT%"
        set "first=0"
    ) else (
        echo , >> "%TS_OUTPUT%"
        type "%%f" >> "%TS_OUTPUT%"
    )
)

echo ✅ TS合并完成：%TS_OUTPUT%
echo.