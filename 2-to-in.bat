@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "TS_INPUT=apps-all.ts"
set "JSON5_SOURCE=3-config.json5"
set "JSON5_OUTPUT=output.json5"
set "REPLACE_FLAG=//替换apps.ts内容"

if not exist "%TS_INPUT%" (echo 错误：未找到 %TS_INPUT%&pause&exit /b 1)
if not exist "%JSON5_SOURCE%" (echo 错误：未找到 %JSON5_SOURCE%&pause&exit /b 1)

:: =============== 读取TS内容 ===============
set "ts_content="
for /f "delims=" %%i in ('type "%TS_INPUT%"') do (
    set "ts_content=!ts_content!%%i"
)

:: =============== 替换（//替换apps.ts内容）===============
powershell -Command "$ts = Get-Content -Path '%TS_INPUT%' -Raw -Encoding UTF8; $json = Get-Content -Path '%JSON5_SOURCE%' -Raw -Encoding UTF8; $result = $json -replace '%REPLACE_FLAG%', $ts; $result | Out-File -FilePath '%JSON5_OUTPUT%' -Encoding UTF8"

echo ✅ JSON5替换完成！输出：%JSON5_OUTPUT%
echo.