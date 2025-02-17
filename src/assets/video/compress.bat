@echo off
REM Создание папки для сжатых файлов
if not exist compressed mkdir compressed

REM Обработка файлов
for %%F in (*.webm) do (
    echo Обработка файла: %%F
    ffmpeg -y -i "%%F" -c:v libvpx-vp9 -b:v 35000k -vf scale=-1:-1 -crf 40 -r 30 -an -threads 16 "compressed/%%~nF.webm" || (
        echo Ошибка при обработке файла %%F
        del "compressed/%%~nF.webm" >nul 2>&1
    )
)

echo Все файлы обработаны. Проверьте папку compressed.
pause