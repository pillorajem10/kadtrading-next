#! /bin/sh
rm -rf .next/
sleep 5
yarn build
sleep 10
tar -czvf kadtort.tar.gz .next
sleep 5
scp -r kadtort.tar.gz p4tric@bangjeep-enterprise.com:/tmp
rm -rf kadtort.tar.gz
#ssh -p 22 p4tric@bangjeep-enterprise.com 'cd /usr/share/nginx/kadtrading.ph && ./kad66.sh'
ssh -p 22 p4tric@bangjeep-enterprise.com './kad66.sh'