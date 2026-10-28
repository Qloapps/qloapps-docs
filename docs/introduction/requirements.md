# Requirements

To install QloApps, you will need the following server configurations for hosted and local serves. The system compatibility will also be checked by the system during the installation, and if the server is not compatible, then the installation will not move ahead.

## Hosted Server Configurations


### Web server
- Apache 1.3, 2.x ([Apache Server Configuration](#apache-server-configuration))
- Nginx ([Nginx Server Configuration](#nginx-server-configuration))
- Microsoft IIS
- Webserver timeout, `max_execution_time`, set to a minimum of *300*

### PHP version
<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="12" style="text-align:center">PHP Version</th>
    </tr>
    <tr class="h-version-titles">
      <th>QloApps Version</th>
      <th>&le;&nbsp;5.3</th>
      <th>5.4</th>
      <th>5.5</th>
      <th>5.6</th>
      <th>7.0</th>
      <th>7.1</th>
      <th>7.2</th>
      <th>7.3</th>
      <th>7.4</th>
      <th>8.0</th>
      <th>&ge;&nbsp;8.1</th>
      <th>&le;&nbsp;8.4</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>1.4.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.4.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.2</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.7.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
</tbody>
</table>

### PHP Extensions Required

- PDO_MySQL
- cURL
- OpenSSL
- SOAP
- GD
- SimpleXML
- DOM
- Zip
- Phar
- Mcrypt


### Other PHP Configurations


- Set `memory_limit` to **128M**
- Set `upload_max_filesize` to **16M**
- Set `max_execution_time` to **500**
- Set `allow_url_fopen` to **on**


### Supported MySQL version

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="12" style="text-align:center">MySQL Version</th>
    </tr>
    <tr class="h-version-titles">
      <th>QloApps Version</th>
      <th>&le;&nbsp;5.0</th>
      <th>5.1</th>
      <th>5.5</th>
      <th>5.6</th>
      <th>5.7</th>
      <th>&ge;&nbsp;8.0</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>1.4.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    </tr>
  <tr>
    <td>1.4.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.2</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
  <tr>
    <td>1.6.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
  <tr>
    <td>1.7.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
</tbody>
</table>

**Note**
- Supported MariaDB version- V10.5, V10.6 , V10.11 , V11.0, V11.2 and V11.4
- SSH or FTP access (ask your hosting service provider for your credentials)
- SSL certificate if you plan to process payments internally (not using PayPal for instance)


## Local Server Configurations


### Supported operating systems

- Windows
- Mac
- Linux


### Prepared package

- WampServer (for Windows)
- XAMPP (for Windows and Mac)
- EasyPHP (for Windows)


### Web server

- Apache 1.3, 2.x ([Apache Server Configuration](#apache-server-configuration))
- Nginx ([Nginx Server Configuration](#nginx-server-configuration))
- Microsoft IIS


### PHP version
<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="12" style="text-align:center">PHP Version</th>
    </tr>
    <tr class="h-version-titles">
      <th>QloApps Version</th>
      <th>&le;&nbsp;5.3</th>
      <th>5.4</th>
      <th>5.5</th>
      <th>5.6</th>
      <th>7.0</th>
      <th>7.1</th>
      <th>7.2</th>
      <th>7.3</th>
      <th>7.4</th>
      <th>8.0</th>
      <th>&ge;&nbsp;8.1</th>
      <th>&le;&nbsp;8.4</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>1.4.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes">
      <i class="fa fa-check" aria-hidden="true" title="Recommended version"></i>
      <span class="sr-only">No</span>
    </td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.4.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes">
      <i class="fa fa-check" aria-hidden="true" title="Recommended version"></i>
      <span class="sr-only">No</span>
    </td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes">
      <i class="fa fa-check" aria-hidden="true" title="Recommended version"></i>
      <span class="sr-only">No</span>
    </td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes">
      <i class="fa fa-check" aria-hidden="true" title="Recommended version"></i>
      <span class="sr-only">No</span>
    </td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.2</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.7.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
</tbody>
</table>

### PHP Extensions Required

- PDO_MySQL
- cURL
- OpenSSL
- SOAP
- GD
- SimpleXML
- DOM
- Zip
- Phar
- Mcrypt


### Other PHP Configurations


- Set `memory_limit` to **128M**
- Set `upload_max_filesize` to **16M**
- Set `max_execution_time` to **500**
- Set `allow_url_fopen` to **on**


### Supported MySQL version

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="12" style="text-align:center">MySQL Version</th>
    </tr>
    <tr class="h-version-titles">
      <th>QloApps Version</th>
      <th>&le;&nbsp;5.0</th>
      <th>5.1</th>
      <th>5.5</th>
      <th>5.6</th>
      <th>5.7</th>
      <th>&ge;&nbsp;8.0</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>1.4.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    </tr>
  <tr>
    <td>1.4.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
  <td>1.5.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.5.2</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
  </tr>
  <tr>
    <td>1.6.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
  <tr>
    <td>1.6.1</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
  <tr>
    <td>1.7.0</td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-no"><span class="sr-only">No</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
    <td class="support-yes"><span class="sr-only">Yes</span></td>
  </tr>
</tbody>
</table>

**Note**
- Supported MariaDB version- V10.5, V10.6 , V10.11 , V11.0, V11.2 and V11.4


## Nginx Server Configuration

Use the following sample Nginx server block for a QloApps installation. Update the `server_name`, SSL certificate paths, and the QloApps root directory to match your environment.

```nginx
server {
    # IPv4.
    listen 80;
    listen 443 ssl http2;


    # [EDIT] Your domain name(s) go here.
    server_name qlo.example.com;

    # [EDIT] Path to your domain Nginx logs.
    access_log /var/log/nginx/qlo.example.com-access.log combined;
    error_log /var/log/nginx/qlo.example.com-error.log info;

    # [EDIT] Path to your SSL certificates (e.g. Certbot: https://certbot.eff.org).
    ssl_certificate /etc/letsencrypt/live/qlo.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/qlo.example.com/privkey.pem;

    # [EDIT] Path to your QloApps directory.
    root /var/www/qloapps;

    index index.php;


    # HSTS — uncomment once the whole site is confirmed to run on HTTPS only.
    # add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    # add_header X-XSS-Protection "1; mode=block";
    # add_header X-Frame-Options "SAMEORIGIN";
    # add_header X-Content-Type-Options nosniff;

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    # [EDIT] Replace 'admin-dev' with your actual admin folder name.
    location /admin-dev/ {
        try_files $uri $uri/ /admin-dev/index.php$is_args$args;
    }

    # .htaccess, .DS_Store, .htpasswd, etc.
    location ~ /\.(?!well-known) {
        deny all;
    }

    # Source code directories — must never be served directly.
    location ~ ^/(app|bin|cache|classes|config|controllers|docs|localization|override|src|tests|tools|translations|var|vendor)/ {
        deny all;
    }

    location ~ ^/modules/.*/vendor/ {
        deny all;
    }

    location ~ \.(log|tpl|twig|sass|yml)$ {
        deny all;
    }

    # Prevent PHP execution from image/upload directories (also covers
    # hotel-image upload paths used by QloApps hotel/room modules).
    location ~ ^/modules/.+/(views/img|img|upload)/ {
        location ~ \.php$ { deny all; }
    }

    location /img {
        location ~ \.php$ { deny all; }
    }

    location /upload {
        location ~ \.php$ { deny all; }
    }

    location ~ [^/]\.php(/|$) {
        try_files $fastcgi_script_name =404;

        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $request_filename;

        fastcgi_index index.php;
        fastcgi_keep_conn on;
        fastcgi_read_timeout 300s;   # QloApps requires max_execution_time >= 300
        fastcgi_send_timeout 300s;

        # [EDIT] Connection to PHP-FPM unix domain socket, replace with your php version.
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
    }
}
```

## Apache Server Configuration

Use the following Apache virtual host example for a QloApps deployment with PHP-FPM and HTTPS. Update the domain name, document root, SSL certificate paths, and PHP-FPM socket to match your server environment.

```apache
# Apache VirtualHost Configuration
# PHP-FPM + HTTPS
# HTTP VirtualHost
# Redirect all HTTP traffic to HTTPS

<VirtualHost *:80>

    # Replace with your actual domain
    ServerName example.com

    # Redirect HTTP → HTTPS
    Redirect permanent / https://example.com/

</VirtualHost>


# HTTPS VirtualHost

<VirtualHost *:443>

    # DOMAIN
    # Replace with your actual domain
    ServerName example.com

    # Replace this with the directory containing your application's index.php

    DocumentRoot /var/www/html/PROJECT_DIRECTORY


    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined


    # SSL CONFIGURATION

    SSLEngine on

    # Replace these with your actual SSL certificate paths
    SSLCertificateFile /etc/letsencrypt/live/example.com/fullchain.pem

    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem


    # DIRECTORY PERMISSIONS

    <Directory /var/www/html/PROJECT_DIRECTORY>

        # Allow Apache to follow symbolic links
        Options FollowSymLinks
        AllowOverride All

        # Allow web requests
        Require all granted

        # Default files Apache should look for
        DirectoryIndex index.php index.html

    </Directory>


    # PHP-FPM CONFIGURATION


    # Send PHP requests to PHP-FPM 
    # Change the PHP version/socket according to the PHP-FPM version installed on the server.
   
    # Example PHP 8.3:
    # /run/php/php8.3-fpm.sock
   
    # Example PHP 8.2:
    # /run/php/php8.2-fpm.sock
    
    # Example PHP 8.1:
    # /run/php/php8.1-fpm.sock

    <FilesMatch "\.php$">

        SetHandler "proxy:unix:/run/php/php8.3-fpm.sock|fcgi://localhost/"

    </FilesMatch>


    # SECURITY HEADERS

    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"


    # HSTS

    # ONLY enable this if the website is always supposed to use HTTPS

    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"

    # Prevent direct access to common configuration/log files.

    <FilesMatch "\.(log|ini|env|yml|yaml)$">
        Require all denied
    </FilesMatch>


</VirtualHost>
```
