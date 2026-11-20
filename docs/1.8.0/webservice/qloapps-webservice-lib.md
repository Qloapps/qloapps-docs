# QloApps Webservice Library

QloApps enables merchants to give third-party tools access to their websites' database through a CRUD API, otherwise called a webservice.

Now you have learned how to configure the webservice and how accesses are given.

Let's learn how to set up a webservice library to use it.

### How to install

#### Prerequisites

- QloApps >= 1.5.0 is installed on a server.
- `mod_rewrite`  is enabled.
- `curl` extension is enabled in PHP


#### Web service library

**PSWebServiceLibrary.php** file can be found in the repository:

[https://github.com/PrestaShop/PrestaShop-webservice-lib/blob/master/PSWebServiceLibrary.php](https://github.com/PrestaShop/PrestaShop-webservice-lib/blob/master/PSWebServiceLibrary.php)

Follow the below steps to download the file :

- Create an empty PHP file as PSWebServiceLibrary.php
- Go to [https://raw.github.com/PrestaShop/PrestaShop-webservice-lib/master/PSWebServiceLibrary.php](https://raw.github.com/PrestaShop/PrestaShop-webservice-lib/master/PSWebServiceLibrary.php) and copy-paste the code in PSWebServiceLibrary.php
- You have to load the PSWebServiceLibrary in your PHP script or application where you need it.

```php
<?php

require_once('./PSWebServiceLibrary.php');

// create object of the web service
$objWebService = new PrestaShopWebservice(....);

```

#### Accessing Webservice

To create your client, create an object of PrestaShopWebservice.

PrestaShopWebservice constructor takes 3 parameters -
- Root path of the website. For example, http://example.com/
- Authentication key. For example, MNBDHALDK122DA879ADAD12ASKSK12W3
- Boolean value for debug mode, `true` if Webservice uses debug mode else `false`.

```php
$objWebService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

```

After creating the object you can use below methods for your operations :

- **get()**	: To retrieve the data of a resource.
- **add()**	: To create data to a resource
- **edit()** : To update data to a resource
- **delete()** : To date from to a resource


### Error Handling

By error handling, it is easy to detect issues and you will be able to correct them easily. Webservice library Error handling is done by using PHP exceptions.

You have to use **try-catch** block for handing the exception thrown by the webservice library.

**PrestaShopWebserviceException** is used in the QloApps webservice library so that you can catch this exception only to deal with errors of webservice.

Below is an example you to handle exception with try and catch blocks :

```php
try {
    // creating webservice object
    $objWebService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

    // get resources of customers
    $xml = $objWebService->get(['resource' => 'customers']);
} catch (PrestaShopWebserviceException $e) {
    // Show error message if exception occurrs
    echo 'Error occurred in webservice :' . $e->getMessage();
}

```


## Read A Resource

To read a resource from the QloApps webservice library :

- The parameter of [key => value] array (**['resource' => 'resource_name']**) in which the wanted resource is defined.

- You need to call the get() method to retrieve an XML containing all the list of sent resoruce data.

### Using PrestaShopWebservice::get()

### List of resource IDs

Let’s get a list of customer IDs in our example:

```php
try {
    // webservice object
    $webService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

    // read customer resource
    $xml = $webService->get(
            ['resource' => 'customers']
        );
} catch (PrestaShopWebserviceException $e) {
    echo 'Error in getting resource : '.$e->getMessage();
}

```

#### Returned xml data

The returned data is a **SimpleXMLElement object** containing resource list. Below is the example of customers list :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <customers>
        <customer id="1" xlink:href="http://example.com/api/customers/1"/>
        <customer id="2" xlink:href="http://example.com/api/customers/2"/>
        <customer id="3" xlink:href="http://example.com/api/customers/3"/>
        <customer id="4" xlink:href="http://example.com/api/customers/4"/>
    </customers>
</qloapps>

```

#### Get children elements

As we have got the **SimpleXMLElement object** as a webservice call result. Now we can loop through this object to get every customer ID.

See the below example for better understanding :

```php
$resources = $xml->customers->children();
foreach ($resources as $resource) {
    $attributes = $resource->attributes();

    // this resource ID can be used to call the webservice to get details of resource
    $resourceId = $attributes['id'];
}

```

So this is how you get the list of available IDs of the resource and how to process the returned list.



### Retrieve data of resource ID

**Now what if you want to get all the data of any specific id of the resource?**

Let's learn to get the data of an ID of the resource. Again understand it by the example of customer resources.

We send the below parameters to get the data :

- **resource**: Name of the resource (customers)
- **id**: Unique ID (int) of the resource.

```php
try {
    // webservice object
    $webService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

    // read customer resource
    $xml = $webService->get(
            [
                'resource' => 'customers',
                'id' => 7, // id of the resource which data to be retrieved
            ]
        );
} catch (PrestaShopWebserviceException $e) {
    echo 'Error in getting resource data : '.$e->getMessage();
}

```

#### Returned xml data

The returned data is a **SimpleXMLElement object** containing resource information. Below is the example of customer information :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <customer>
        <id><![CDATA[7]]></id>
        <id_default_group xlink:href="http://example.com/api/groups/3"><![CDATA[3]]></id_default_group>
        <id_lang xlink:href="http://example.com/api/languages/1"><![CDATA[1]]></id_lang>
        <newsletter_date_add><![CDATA[2021-12-20 02:30:15]]></newsletter_date_add>
        <ip_registration_newsletter></ip_registration_newsletter>
        <last_passwd_gen><![CDATA[2021-04-10 09:31:19]]></last_passwd_gen>
        <secure_key><![CDATA[hdlaksj123809khdkladjlda23112jkk]]></secure_key>
        <deleted><![CDATA[0]]></deleted>
        <passwd><![CDATA[jlj381023810lajdla091ensdy3dljdx]]></passwd>
        <lastname><![CDATA[DOE]]></lastname>
        <firstname><![CDATA[John]]></firstname>
        <email><![CDATA[pub@qloapps.com]]></email>
        <id_gender><![CDATA[1]]></id_gender>
        <birthday><![CDATA[1991-01-20]]></birthday>
        <newsletter><![CDATA[1]]></newsletter>
        <optin><![CDATA[0]]></optin>
        <website></website>
        <company></company>
        <siret></siret>
        <ape></ape>
        <outstanding_allow_amount><![CDATA[0.000000]]></outstanding_allow_amount>
        <show_public_prices><![CDATA[0]]></show_public_prices>
        <id_risk><![CDATA[0]]></id_risk>
        <max_payment_days><![CDATA[0]]></max_payment_days>
        <active><![CDATA[1]]></active>
        <note></note>
        <is_guest><![CDATA[10]]></is_guest>
        <id_shop><![CDATA[1]]></id_shop>
        <id_shop_group><![CDATA[1]]></id_shop_group>
        <date_add><![CDATA[2020-04-09 19:31:19]]></date_add>
        <date_upd><![CDATA[2020-04-09 19:31:19]]></date_upd>
        <reset_password_token></reset_password_token>
        <reset_password_validity><![CDATA[0000-00-00 00:00:00]]></reset_password_validity>
        <associations>
            <groups nodeType="group" api="groups">
                <group xlink:href="http://example.com/api/groups/3">
                    <id><![CDATA[3]]></id>
                </group>
            </groups>
        </associations>
    </customer>
</qloapps>

```

**_You can request http://example.com/api/customers/7 from your browser to get the same XML data retrieved above._**

#### Get the fields of resource

As we have got the **SimpleXMLElement object** as a webservice call result. Now we can loop through this object to get every field of the resource.

```php
$customerData = $xml->customer->children();

$firstName = $customerData->firstname;
$lastName = $customerData->lastname;

foreach ($customerData as $key => $value) {
    echo $key . ': ' . $value . PHP_EOL;
}

```

So this is all about retrieving the data of resources through QloApps Webservice Library.



## Add A Resource

To add a resource via a webservice is a bit more complex than getting some data from the API. We have to send data by XML to the API. Also, make sure that the created XML must be understandable and complete before sending it to the webservice.

We will have to use the blank schema of the resource. Then fill your data in the black schema and call the webservice API with add() method.

Let's do it step by step process :

Let's create a resource via Webservice for better understanding. We will take an example to create the customer resource.

### Step 1 : Retrieve the resource blank schema

```php
try {
    // create webservice object
    $webService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

    // call to retrieve the blank schema
    $blankSchemaXml = $webService->get(['url' => 'http://example.com/api/customers?schema=blank']);
} catch (PrestaShopWebserviceException $e) {
    echo 'Error in getting resource schema ' . $e->getMessage();
}

```

### Step 2 : Fill the schema

As we have got the empty xml from the above code, Now we have to fill data to add for the resource.

```php
// fill customer data to create customer
$customerFields = $blankSchemaXml->customer->children();
$customerFields->firstname = 'John';
$customerFields->lastname = 'DOE';
$customerFields->email = 'johndoe@demo.com';
$customerFields->passwd = 'passkey@12#';
.
.

```

### Step 3 : Add the resource

After fill all the fields send parameters in the add() method.

We send below parameters in the add method :

- **resource**: Name of the resource
- **postXml** : XML content (string) created as $xml->asXML()


```php
$createdXml = $webService->add([
    'resource' => 'customers',
    'postXml' => $blankSchemaXml->asXML(),
]);
$newCustomerFields = $createdXml->customer->children();
echo 'Customer created with ID ' . $newCustomerFields->id . PHP_EOL;

```


---

**NOTE** : Every resource has validation rules i.e. required fields, field types and formats etc.) of its own. You have to follow these conditions while filling data in the schema otherwise the webservice will not add the resource.

Use synopsis schema to know the validation rules of a resource. For example, http://example.com/api/customers?schema=synopsis

---


## Update Resource

Updating a resource is similar to adding resource flow. In the creation, we will have to send a blank full schema with the values entered. But while updating, we can get the XML from webservice and the update only fields which we want to update.

Let's Update a resource via Webservice for better understanding. We will take an example to update the customer resource.

### Step 1: Retrieve the resource

```php
try {
    // create webservice object
    $webService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);

    // get customer with id = 1
    $xml = $webService->get([
        'resource' => 'customers',
        // you can send a value of id which is dynamically calculated by code.
        'id' => 1,
    ]);
} catch (PrestaShopWebserviceException $e) {
    echo 'Error in getting customer : '.$e->getMessage();
}

```

### Step 2 : Fill the schema

As we have got the XML from the above code, now we have to update only the fields which we want to update for the resource (other fields are already present in the XML).

```php
$customerFields = $xml->customer->children();
$customerFields->firstname = 'John';
$customerFields->lastname = 'DOE';

```

### Step 3 : Update the resource

After updating the fields send parameters in the edit() method.

We send below parameters in the edit method :

- **resource**: Name of the resource
- **id** : Id of the resource to be updated
- **putXml** : XML content (string) created as $xml->asXML()

```php
$updatedXml = $webService->edit([
    'resource' => 'customers',
    'id' => (int) $customerFields->id,
    'putXml' => $xml->asXML(),
]);

$customerFields = $updatedXml->customer->children();
echo 'Customer resource updated with ID ' . $customerFields->id;

```

---

**NOTE**: There may be some more complex resources (ex. room_types).
You need to use a less generic code to clean the extra fields or copy them into a blank schema.

---


## Delete a resource

To delete a resource with QloApps webservice library :
- You need resource ID
- You have to use the delete() method.

Below is the code to use PrestaShopWebservice::delete

```php
try {
    $webService = new PrestaShopWebservice('http://example.com/', 'MNBDHALDK122DA879ADAD12ASKSK12W3', false);
    $id = 7;
    $webService->delete([
        'resource' => 'customers',
        'id' => $id,
    ]);

    echo 'Customer id : ' . $id . ' is deleted successfully.';
} catch (PrestaShopWebserviceException $e) {
    echo 'Error:' . $e->getMessage();
}

```