# HousingApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**housingGet**](HousingApi.md#housingGet) | **GET** /housing | 
[**housingPost**](HousingApi.md#housingPost) | **POST** /housing | 


<a name="housingGet"></a>
# **housingGet**
> housingGet(limit, page)



obtiene el un conjunto de recursos paginados

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.HousingApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    HousingApi apiInstance = new HousingApi(defaultClient);
    BigDecimal limit = new BigDecimal(78); // BigDecimal | limite de los recursos obtenidos
    String page = "page_example"; // String | página actual
    try {
      apiInstance.housingGet(limit, page);
    } catch (ApiException e) {
      System.err.println("Exception when calling HousingApi#housingGet");
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
 **limit** | **BigDecimal**| limite de los recursos obtenidos | [optional]
 **page** | **String**| página actual | [optional]

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
**200** | success |  -  |
**404** | no existe el documento en base de datos |  -  |

<a name="housingPost"></a>
# **housingPost**
> housingPost(housing)



crea una nueva vivienda

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.HousingApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    HousingApi apiInstance = new HousingApi(defaultClient);
    Object housing = null; // Object | 
    try {
      apiInstance.housingPost(housing);
    } catch (ApiException e) {
      System.err.println("Exception when calling HousingApi#housingPost");
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
 **housing** | **Object**|  |

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
**201** | recurso creado |  -  |
**400** | faltan atributos requeridos |  -  |

