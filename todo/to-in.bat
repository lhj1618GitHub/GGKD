@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 自动定位到【项目根目录】，不管从哪里运行都正确
PUSHD "%~dp0.."
set "ROOT_DIR=!CD!"
POPD
set "TS_INPUT=!ROOT_DIR!\all-apps.ts"
set "JSON5_SOURCE=%~dp0sample.json5"
set "JSON5_OUTPUT=!ROOT_DIR!\new.json5"
set "REPLACE_FLAG=//替换标记"

:: 校验输入文件是否存在
if not exist "!TS_INPUT!" (
    echo 错误：未找到 !TS_INPUT!
    pause
    exit /b 1
)
if not exist "!JSON5_SOURCE!" (
    echo 错误：未找到 !JSON5_SOURCE!
    pause
    exit /b 1
)

:: 删除TS_INPUT中所有的```符号，UTF-8编码防乱码
powershell -Command "(Get-Content -Path '!TS_INPUT!' -Encoding UTF8) -replace '```', '' | Set-Content -Path '!TS_INPUT!' -Encoding UTF8 -Force"
if !errorlevel! equ 0 (
    echo ✅ !TS_INPUT! 中```符号清理完成
) else (
    echo ❌ !TS_INPUT! 清理失败，请检查文件权限/路径是否含特殊字符
    pause
    exit /b 1
)
echo.

:: 替换标记
powershell -Command "$tsContent = Get-Content -Path '!TS_INPUT!' -Raw -Encoding UTF8; $jsonContent = Get-Content -Path '!JSON5_SOURCE!' -Raw -Encoding UTF8; $resultContent = $jsonContent -replace '!REPLACE_FLAG!', $tsContent; $resultContent | Out-File -FilePath '!JSON5_OUTPUT!' -Encoding UTF8 -Force -NoNewline"

:: 双重校验：errorlevel + 文件是否存在
if !errorlevel! equ 0 if exist "!JSON5_OUTPUT!" (
    echo ✅ 替换完成！输出：!JSON5_OUTPUT!
) else (
    echo ❌ JSON5 替换失败，请检查：
    echo  1. 文件内容是否含特殊转义字符
    echo  2. 替换标记!REPLACE_FLAG!是否在sample.json5中存在
    echo  3. 目标路径是否有写入权限
    exit /b 1
)

echo.
echo 操作全部完成！
pause >nul
exit /b 0