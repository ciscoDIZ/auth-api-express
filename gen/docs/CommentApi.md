# CommentApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentGet**](CommentApi.md#commentGet) | **GET** /comment | 
[**commentIdDelete**](CommentApi.md#commentIdDelete) | **DELETE** /comment/{id} | 
[**commentIdGet**](CommentApi.md#commentIdGet) | **GET** /comment/{id} | 
[**commentIdPatch**](CommentApi.md#commentIdPatch) | **PATCH** /comment/{id} | 
[**commentLikeIdPatch**](CommentApi.md#commentLikeIdPatch) | **PATCH** /comment/like/{id} | 
[**commentLikeRemoveIdPatch**](CommentApi.md#commentLikeRemoveIdPatch) | **PATCH** /comment/like/remove/{id} | 
[**commentPost**](CommentApi.md#commentPost) | **POST** /comment | 


<a name="commentGet"></a>
# **commentGet**
> commentGet(page, limit)



recupera los usuarios

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String page = "page_example"; // String | página a la que accede la petición
    String limit = "limit_example"; // String | 
    try {
      apiInstance.commentGet(page, limit);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentGet");
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
 **limit** | **String**|  | [optional]

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
**400** | error en algún parámetro |  -  |
**404** | si no se encuentra |  -  |

<a name="commentIdDelete"></a>
# **commentIdDelete**
> commentIdDelete(id)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String id = "id_example"; // String | id del recurse el cual se pretende borrar
    try {
      apiInstance.commentIdDelete(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentIdDelete");
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
 **id** | **String**| id del recurse el cual se pretende borrar |

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
**203** | cuando se ha borrado |  -  |
**404** | si no existe el recurso |  -  |

<a name="commentIdGet"></a>
# **commentIdGet**
> commentIdGet(id)



recupera los datos de un comentario el cual coincide con l id que se pasa por parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String id = "id_example"; // String | id del comentario al cual se pretende acceder
    try {
      apiInstance.commentIdGet(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentIdGet");
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
 **id** | **String**| id del comentario al cual se pretende acceder |

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

<a name="commentIdPatch"></a>
# **commentIdPatch**
> commentIdPatch(id)



actualiza el recurso correspondiente a la id pasada por parámetro

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      apiInstance.commentIdPatch(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentIdPatch");
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
 **id** | **String**|  |

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
**201** | si se actualiza |  -  |
**400** | en caso de error |  -  |
**404** | si no existe el recurso |  -  |

<a name="commentLikeIdPatch"></a>
# **commentLikeIdPatch**
> commentLikeIdPatch(id, comment)



crea nuevo comentario

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String id = "id_example"; // String | 
    InlineObject2 comment = new InlineObject2(); // InlineObject2 | 
    try {
      apiInstance.commentLikeIdPatch(id, comment);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentLikeIdPatch");
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
 **id** | **String**|  |
 **comment** | [**InlineObject2**](InlineObject2.md)|  | [optional]

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
**201** | si se actualiza el recurso |  -  |
**400** | si hay algún error en la consulta |  -  |
**404** | si el recurso al que se pretende acceder no existe |  -  |

<a name="commentLikeRemoveIdPatch"></a>
# **commentLikeRemoveIdPatch**
> commentLikeRemoveIdPatch(id, comment)



crea nuevo comentario

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    String id = "id_example"; // String | 
    InlineObject3 comment = new InlineObject3(); // InlineObject3 | 
    try {
      apiInstance.commentLikeRemoveIdPatch(id, comment);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentLikeRemoveIdPatch");
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
 **id** | **String**|  |
 **comment** | [**InlineObject3**](InlineObject3.md)|  | [optional]

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
**201** | si se actualiza el recurso |  -  |
**400** | si hay algún error en la consulta |  -  |
**404** | si el recurso al que se pretende acceder no existe |  -  |

<a name="commentPost"></a>
# **commentPost**
> commentPost(comment)



crea nuevo comentario

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CommentApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    CommentApi apiInstance = new CommentApi(defaultClient);
    InlineObject1 comment = new InlineObject1(); // InlineObject1 | 
    try {
      apiInstance.commentPost(comment);
    } catch (ApiException e) {
      System.err.println("Exception when calling CommentApi#commentPost");
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
 **comment** | [**InlineObject1**](InlineObject1.md)|  | [optional]

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

