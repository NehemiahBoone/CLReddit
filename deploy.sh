cd wwwsrc
npm run build
cd ..
dotnet publish -c Release
docker build -t clreddit ./
docker tag clreddit registry.heroku.com/clreddit/web
docker push registry.heroku.com/clreddit/web
heroku container:release web -a clreddit
echo press any key
read end