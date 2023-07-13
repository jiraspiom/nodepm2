#GSB PROD

npm i -g pm2
pm2 install typescript
pm2 install @types/node

#comando 
>pm2 list
>pm2 ls
>pm2 start src/server.ts
>pm2 stop 0; ou all para parar todas 

pm2 restart all
pm2 delete 
pm2 start -i max; ou 1 ou 2 ou 3 cpus para especificar as cpus
pm2 monit
pm2 show [id]

---- adicionar ao startup
pm2 startup
pm2 save

no arquivo processa_pm2.json // pode usar 1 no  lugar do max e usar fork no lugar do cluster
