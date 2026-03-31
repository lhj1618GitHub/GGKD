@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 自动定位到【项目根目录】，不管从哪里运行都正确
PUSHD "%~dp0.."
set "ROOT_DIR=%CD%"
POPD

set "TS_INPUT=%ROOT_DIR%\all-apps.ts"
set "JSON5_SOURCE=%~dp0sample.json5"
set "JSON5_OUTPUT=%ROOT_DIR%\new.json5"
set "REPLACE_FLAG=//替换标记"

if not exist "%TS_INPUT%" (
    echo 错误：未找到 !TS_INPUT!
    pause
    exit /b 1
)
if not exist "%JSON5_SOURCE%" (
    echo 错误：未找到 !JSON5_SOURCE!
    pause
    exit /b 1
)

:: =============== 替换内容 ===============
powershell -Command "$ts = Get-Content -Path '%TS_INPUT%' -Raw -Encoding UTF8; $json = Get-Content -Path '%JSON5_SOURCE%' -Raw -Encoding UTF8; $result = $json -replace '%REPLACE_FLAG%', $ts; $result | Out-File -FilePath '%JSON5_OUTPUT%' -Encoding UTF8"

echo.
echo ✅ JSON5 替换完成！输出：%JSON5_OUTPUT%
echo.