# UserApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailEmailGet**](UserApi.md#emailEmailGet) | **GET** /email/{email} | 
[**userGet**](UserApi.md#userGet) | **GET** /user | 
[**userIdGet**](UserApi.md#userIdGet) | **GET** /user/{id} | 
[**userIdPatch**](UserApi.md#userIdPatch) | **PATCH** /user/{id} | 
[**userIdPut**](UserApi.md#userIdPut) | **PUT** /user/{id} | 
[**userPost**](UserApi.md#userPost) | **POST** /user | 
[**useridDelete**](UserApi.md#useridDelete) | **DELETE** /user{id} | 


<a name="emailEmailGet"></a>
# **emailEmailGet**
> emailEmailGet(email)



busca un usuario cuyo email coincide con el pasado por parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String email = "email_example"; // String | email del usuario que buscar
    try {
      apiInstance.emailEmailGet(email);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#emailEmailGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email del usuario que buscar |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

<a name="userGet"></a>
# **userGet**
> userGet(page, limit)



devuelve un único usuario

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String page = "page_example"; // String | página a la que accede la petición
    String limit = "limit_example"; // String | cantidad de recursos máximos devueltos
    try {
      apiInstance.userGet(page, limit);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#userGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| página a la que accede la petición | [optional]
 **limit** | **String**| cantidad de recursos máximos devueltos | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

<a name="userIdGet"></a>
# **userIdGet**
> userIdGet(id)



Get all Employee

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String id = "id_example"; // String | Create an new employee
    try {
      apiInstance.userIdGet(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#userIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Create an new employee |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

<a name="userIdPatch"></a>
# **userIdPatch**
> userIdPatch(id, token)



actualiza el avatar del usuario cuya id coincide con la pasada po parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String id = "id_example"; // String | ObjectID del usuario a borrar
    String token = "token_example"; // String | token que autentica al usuario que realiza la petición
    try {
      apiInstance.userIdPatch(id, token);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#userIdPatch");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ObjectID del usuario a borrar |
 **token** | **String**| token que autentica al usuario que realiza la petición |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

<a name="userIdPut"></a>
# **userIdPut**
> userIdPut(id)



Borra un usuario cuya id coincide con la pasada po parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String id = "id_example"; // String | ObjectID del usuario a borrar
    try {
      apiInstance.userIdPut(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#userIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ObjectID del usuario a borrar |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

<a name="userPost"></a>
# **userPost**
> userPost(user)



crea un nuevo usuario

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    InlineObject user = new InlineObject(); // InlineObject | 
    try {
      apiInstance.userPost(user);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#userPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**InlineObject**](InlineObject.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad request |  -  |

<a name="useridDelete"></a>
# **useridDelete**
> useridDelete(id)



Borra un usuario cuya id coincide con la pasada po parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UserApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    UserApi apiInstance = new UserApi(defaultClient);
    String id = "id_example"; // String | ObjectID del usuario a borrar
    try {
      apiInstance.useridDelete(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling UserApi#useridDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ObjectID del usuario a borrar |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

