#!/bin/bash

PROJECT='casosberne.cz'
NOW=$(date +"%Y.%m.%d_%H:%M")
FILE="/Users/michal/Google Drive/Project/${PROJECT}/backups/backup_${NOW}"
APP='casosberne-cz'

echo "> Creating backup"
heroku pg:backups capture --app=${APP}
echo "Getting backup info"
line=`heroku pg:backups --app=${APP} 2> /dev/null | sed -n 4,1p`
echo $line
id=`echo $line | awk -F ' ' '{print $1}'`
echo $id
echo "Gettin backup URL"
url=`heroku pg:backups public-url $id --app=${APP} | sed -n 1,1p`
echo "Fetching backup file"
curl -o "${FILE}" "$url"
du -hs "${FILE}"
