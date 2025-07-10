# Requirements

To install QloApps, you will need the following server configurations for hosted and local serves. The system compatibility will also be checked by the system during the installation, and if the server is not compatible, then the installation will not move ahead.

## Hosted Server Configurations


### Web server
- Apache 1.3, 2.x
- Nginx
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

- Apache 1.3, 2.x
- Nginx
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

