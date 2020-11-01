~~~~apache


<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerName vincjo.fr
        ServerAlias www.vincjo.fr
        DocumentRoot /var/www/vincjo.fr/home/public
        <Directory "/var/www/vincjo.fr">
            Options -Indexes +FollowSymLinks +ExecCGI
            AllowOverride All
            Require all granted
        </Directory>
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
    <Directory "/var/www/vincjo.fr">
        Options -Indexes +FollowSymLinks +ExecCGI
        AllowOverride All
        Require all granted
    </Directory>
    Alias /svelte-simple-datatables/ "/var/www/vincjo.fr/svelte-simple-datatables/example/public"
    DirectoryIndex index.html
</virtualHost>
~~~~