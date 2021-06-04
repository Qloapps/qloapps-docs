# Requirements

In order to install QloApps you will need the following server configurations for hosted and local serves.
The system compatibility will also be check by the system which installation and if the server is not compatible then the installation will not move ahead.

Hosted Server Configurations
----------------------------

1. **Web server**: Apache 1.3, Apache 2.x, Nginx or Microsoft IIS
2. **PHP version**: 5.4+ and below PHP 7.0
3. **MySQL version**:  5.0+ and below 5.7 installed with a database created
4. SSH or FTP access (ask your hosting service for your credentials)
5. In the PHP configuration ask your provider to set `memory_limit` to “128M”, `upload_max_filesize` to “16M”, `max_execution_time` to “500” and `allow_url_fopen` on
6. SSL certificate if you plan to process payments internally (not using PayPal for instance)
7. **Required PHP extensions**: cURL, SimpleXML, SOAP


Local Server Configurations
----------------------------

1. **Supported operating system**: Windows, Mac, and Linux
2. **A prepared package**: WampServer (for Windows), Xampp (for Windows and Mac) or EasyPHP (for Windows)
3. **Web server**: Apache 1.3, Apache 2.x, Nginx or Microsoft IIS
4. **PHP**: 5.4+ and below PHP 7.0
5. **MySQL** 5.0+ and below 5.7 installed with a database created
6. In the PHP configuration, set `memory_limit` to "128M", `upload_max_filesize` to “16M” and `max_execution_time` to “500”
7. **Required PHP extensions**: cURL, SimpleXML, SOAP
