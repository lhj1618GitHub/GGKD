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

:: 删除TS_INPUT中所有的```符号，UTF-8编码防乱码
echo 正在清理!TS_INPUT!中的```符号...
powershell -Command "(Get-Content -Path '%TS_INPUT%' -Encoding UTF8) -replace '```', '' | Set-Content -Path '%TS_INPUT%' -Encoding UTF8"
if !errorlevel! equ 0 (
    echo ✅ !TS_INPUT! 中```符号清理完成
) else (
    echo ❌ !TS_INPUT! 清理失败，请检查文件权限
    pause
    exit /b 1
)
echo.

:: 替换标记
powershell -Command "$ts = Get-Content -Path '%TS_INPUT%' -Raw -Encoding UTF8; $json = Get-Content -Path '%JSON5_SOURCE%' -Raw -Encoding UTF8; $result = $json -replace '%REPLACE_FLAG%', $ts; $result | Out-File -FilePath '%JSON5_OUTPUT%' -Encoding UTF8"

:: 校验替换是否成功
if !errorlevel! equ 0 (
    echo ✅ JSON5 替换完成！输出：%JSON5_OUTPUT%
) else (
    echo ❌ JSON5 替换失败，请检查文件内容格式
)
echo.
