# Basics | First Steps

As we know **[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)** protocol and **[XML](https://en.wikipedia.org/wiki/XML)** files are understood by most of the platforms. So QloApps web service uses the REST architecture so that it can be available on most of the platforms.

### CRUD and REST API

**[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)**: The four basic operations for managing data in a sotware are **Create, Read, Update, Delete**. CRUD is an acronym for these operations.

**[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)**: Defines a kind of software architecture which promotes the use of HTTP methods when building a web application.

HTTP has many methods that can perform actions on data in the REST architecture. Below are four most important [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods):

| HTTP/REST   | CRUD        | SQL         |
| :---        | :---        | :---        |
| GET         | Read        | SELECT      |
| POST        | Create      | INSERT      |
| PUT         | Update      | UPDATE      |
| DELETE      | Delete      | DELETE      |


As we have already generated webservice key in the [Enable | Configure Webservice](./enable-webservice.md) page. Now we can test the website's webservices.

**Endpoint of the webservice is located in the /api/ folder at the root of your installation of QloApps.**

### Test the API

- If QloApps is installed at the root folder of your server, access the API here: http://example.com/api/

- If QloApps is installed in a subfolder (qloapps/) of root folder on your server, then access the API here: http://example.com/qloapps/api/

You can reach /api endpoint if URL is correctly rewritten to use it.

For httpd, .htaccess handles it which means you need to make sure this file is processed by httpd. (it requires mod_rewrite to be enabled and VirtualHost must have
AllowOverride All).


### Access API from browser

#### 1. When you open the /api endpoint in the browser then you will be prompted to enter username and password. You have to enter "authentication key" as username and you have not to enter any password.

#### 2. You can also access the API by including your "authentication key" in the url. In this way, you will not have to enter any username.
From a javascript client or any application, It is recommended way for API call.
Example: Suppose your webservice access API key is MNBDHALDK122DA879ADAD12ASKSK12W3
- At the root of the server: https://MNBDHALDK122DA879ADAD12ASKSK12W3@example.com/api/
- In a subfolder of the server: https://MNBDHALDK122DA879ADAD12ASKSK12W3@example.com/qloapps/api/

We recomend you to use API clients like **Postman** or **Insomnia** to test/call the APIs.

**_As you can see that no authentication process is required to access the APIs. So you need to be very careful with you access key rights._**

### Learn to use webservice API

#### Resource description

When endpoint /api url is called then summary of the available resources will open which you can access with you authentication key. You will also see the rights given to any resource. In this example, you can see what permissions are given to the /api/addresses API:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <api shopName="QloApps Bookings">
        <addresses xlink:href="http://mydomain.com/hotelcommerce/api/addresses" get="true" put="true" post="true" delete="true" head="true">
            <description xlink:href="http://mydomain.com/hotelcommerce/api/addresses" get="true" put="true" post="true" delete="true" head="true"> The Customer, Manufacturer and Customer addresses</description>
            <schema xlink:href="http://mydomain.com/hotelcommerce/api/addresses?schema=blank" type="blank"/>
            <schema xlink:href="http://mydomain.com/hotelcommerce/api/addresses?schema=synopsis" type="synopsis"/>
        </addresses>
        .
        .
        .
    </api>
</qloapps>
```

Every API in QloApps webservice has two schema APIs -

- **/api/RESOURCE?schema=blank**: This will return default blank data which you can use as a base for your write API calls. (contains the names of fields)
- **/api/RESOURCE?schema=synopsis**: This will return basic info on the API format. (contains more information of fields like name, format and type etc.)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <address>
        <id_customer format="isNullOrUnsignedId"></id_customer>
        <id_manufacturer format="isNullOrUnsignedId"></id_manufacturer>
        <id_supplier format="isNullOrUnsignedId"></id_supplier>
        <id_warehouse format="isNullOrUnsignedId"></id_warehouse>
        <id_country required="true" format="isUnsignedId"></id_country>
        <id_state format="isNullOrUnsignedId"></id_state>
        <alias required="true" maxSize="32" format="isGenericName"></alias>
        <company maxSize="255" format="isGenericName"></company>
        <lastname required="true" maxSize="255" format="isName"></lastname>
        <firstname required="true" maxSize="255" format="isName"></firstname>
        <vat_number format="isGenericName"></vat_number>
        <address1 required="true" maxSize="128" format="isAddress"></address1>
        <address2 maxSize="128" format="isAddress"></address2>
        <postcode maxSize="12" format="isPostCode"></postcode>
        <city required="true" maxSize="64" format="isCityName"></city>
        <other maxSize="300" format="isMessage"></other>
        <phone maxSize="32" format="isPhoneNumber"></phone>
        <phone_mobile maxSize="32" format="isPhoneNumber"></phone_mobile>
        <dni maxSize="16" format="isDniLite"></dni>
        <deleted format="isBool"></deleted>
        <date_add format="isDate"></date_add>
        <date_upd format="isDate"></date_upd>
    </address>
</qloapps>
```

### Get | Read resource

Every resource has an **XLink** attribute.
XLink enables you to access your various resources. It associates an XML file to another XML file via a link.

We can see the root /api call that we have access to http://example.com/api/addresses which will return the list of Addresses as below -

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <addresses>
        <address id="1" xlink:href="http://example.com/api/addresses/1"/>
        <address id="2" xlink:href="http://example.com/api/addresses/2"/>
        <address id="3" xlink:href="http://example.com/api/addresses/3"/>
        <address id="4" xlink:href="http://example.com/api/addresses/4"/>
    </addresses>
    .
    .
    .
</qloapps>
```

#### Resource API url pattern

Resource API URL always follow the pattern:

URLs like http://example.com/api/NAME_OF_RESOURCE list a resource type.

URLs like http://example.com/api/NAME_OF_RESOURCE/ID_RESOURCE return specified resource information. Let's see how this API call result will look like. We are calling http://example.com/api/addresses/1 in our example here:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <address>
        <id><![CDATA[1]]></id>
        <id_customer xlink:href="http://example.com/api/customers/1"><![CDATA[1]]></id_customer>
        <id_manufacturer><![CDATA[0]]></id_manufacturer>
        <id_supplier><![CDATA[0]]></id_supplier>
        <id_warehouse><![CDATA[0]]></id_warehouse>
        <id_country xlink:href="http://example.com/api/countries/216"><![CDATA[8]]></id_country>
        <id_state><![CDATA[0]]></id_state>
        <alias><![CDATA[My Address]]></alias>
        <company><![CDATA[My Company]]></company>
        <lastname><![CDATA[DOE]]></lastname>
        <firstname><![CDATA[John]]></firstname>
        <vat_number></vat_number>
        <address1><![CDATA[Sector - 63]]></address1>
        <address2><![CDATA[2nd floor]]></address2>
        <postcode><![CDATA[201301]]></postcode>
        <city><![CDATA[Noida]]></city>
        <other></other>
        <phone><![CDATA[0987654321]]></phone>
        <phone_mobile></phone_mobile>
        <dni></dni>
        <deleted><![CDATA[0]]></deleted>
        <date_add><![CDATA[2019-01-15 22:46:55]]></date_add>
        <date_upd><![CDATA[2019-01-15 22:46:55]]></date_upd>
    </address>
</qloapps>
```

### Create a new resource

To create a resource follow the below steps:

- GET the XML blank data for the resource. For example: /api/addresses?schema=blank
- Fill the blank schema with your data.
- Send HTTP POST request with the changed XML as body content to the /api/addresses/ URL.

QloApps will add everything to the database. In the response, you will get an XML file indicating successful operation and the ID of the newly created resource.

### Update a resource

To update a resource follow the below steps:

- GET the full XML file of the resource you want to update. For example: /api/addresses/1
- Edit the XML content to be updated.
- Send an HTTP PUT request with the changed XML file as body content to the same URL (/api/addresses/1) again.

QloApps will update changed content in the database.


### JSON format instead of XML
QloApps Web services can also output in JSON instead of XML.

For the JSON output below are the choices with query parameter -

- output_format=JSON : example - https://UCCLLQ9N2ARSHWCXLT74KUKSSK34BFKX@example.com/api/?output_format=JSON
- io_format=JSON : example - https://UCCLLQ9N2ARSHWCXLT74KUKSSK34BFKX@example.com/api/?io_format=JSON


#### You have to add one of the above query parameters in the headers of your HTTP request
```
Example:

GET /api/ HTTP/1.1
Host: example.com
Output-Format: JSON
Authorization: Basic VUNDTExROU4yQVJTSFdDWExUNzRLVUtTU0szNEJGS1g6
```
