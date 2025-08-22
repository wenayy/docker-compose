## mannual installation step 

- Install nodejs locally
- clone the repo
-Install all dependecies (npm install)
-Start the Db locally(postgres)
  -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
  - get urself a databse from neon.tech

- change the .env file and update ur credentials
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start


## Docker installation steps
 
- install docker in ur local computer (docker desktop)
-clone the repo 
- docker network create ourproject
- docker run -network ourporject  -d  -p 5432:5432 postgres
- in the database url put in place of localhost postgres(the name of the dockerimage)

-docker run -network ourporject -d -p 300:300 myproject






## docker-compose installation steps

