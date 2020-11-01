~~~~apache
<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerName vincjo.fr
        ServerAlias www.vincjo.fr
        DocumentRoot /var/www/vincjo.fr/home/public
        Alias /svelte-simple-datatables/ "/var/www/vincjo.fr/svelte-simple-datatables/example/public"
        DirectoryIndex index.html
        SSLCertificateFile /etc/letsencrypt/live/vincjo.fr/fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/live/vincjo.fr/privkey.pem
        Include /etc/letsencrypt/options-ssl-apache.conf
    </VirtualHost>
</IfModule>

<VirtualHost *:80>
    ServerName vincjo.fr
    ServerAlias www.vincjo.fr
    DocumentRoot /var/www/vincjo.fr/home/public
    Alias /svelte-simple-datatables/ "/var/www/vincjo.fr/svelte-simple-datatables/example/public"
    DirectoryIndex index.html
</virtualHost>
~~~~

certbot-auto certonly --webroot --webroot-path /var/www/vincjo.fr/home/public --domain vincjo.fr --domain www.vincjo.fr --email v.joseph3@gmail.com