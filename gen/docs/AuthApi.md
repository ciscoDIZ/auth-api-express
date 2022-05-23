# AuthApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authIdPatch**](AuthApi.md#authIdPatch) | **PATCH** /auth/{id} | 
[**authPatch**](AuthApi.md#authPatch) | **PATCH** /auth | 
[**authPut**](AuthApi.md#authPut) | **PUT** /auth | 


<a name="authIdPatch"></a>
# **authIdPatch**
> authIdPatch(id)



activa cuenta de usuario ya registrado

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    AuthApi apiInstance = new AuthApi(defaultClient);
    String id = "id_example"; // String | id del usuario el cual se pretende activar
    try {
      apiInstance.authIdPatch(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#authIdPatch");
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
 **id** | **String**| id del usuario el cual se pretende activar |

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
**200** | a |  -  |
**400** | a |  -  |

<a name="authPatch"></a>
# **authPatch**
> authPatch(payload)



autentica usuario ya registrado

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    AuthApi apiInstance = new AuthApi(defaultClient);
    InlineObject5 payload = new InlineObject5(); // InlineObject5 | 
    try {
      apiInstance.authPatch(payload);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#authPatch");
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
 **payload** | [**InlineObject5**](InlineObject5.md)|  | [optional]

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
**200** | si el usuario es autenticado |  -  |
**400** | en caso de no ser autenticado |  -  |

<a name="authPut"></a>
# **authPut**
> authPut(credentials)



autentica usuario ya registrado

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    AuthApi apiInstance = new AuthApi(defaultClient);
    InlineObject4 credentials = new InlineObject4(); // InlineObject4 | 
    try {
      apiInstance.authPut(credentials);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#authPut");
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
 **credentials** | [**InlineObject4**](InlineObject4.md)|  | [optional]

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
**200** | a |  -  |
**400** | a |  -  |

