/*
 * Sample API
 * API description in Markdown.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.InlineObject1;
import org.openapitools.client.model.InlineObject2;
import org.openapitools.client.model.InlineObject3;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CommentApi {
    private ApiClient localVarApiClient;

    public CommentApi() {
        this(Configuration.getDefaultApiClient());
    }

    public CommentApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for commentGet
     * @param page página a la que accede la petición (optional)
     * @param limit  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> error en algún parámetro </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no se encuentra </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentGetCall(String page, String limit, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/comment";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (page != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("page", page));
        }

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentGetValidateBeforeCall(String page, String limit, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = commentGetCall(page, limit, _callback);
        return localVarCall;

    }

    /**
     * 
     * recupera los usuarios
     * @param page página a la que accede la petición (optional)
     * @param limit  (optional)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> error en algún parámetro </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no se encuentra </td><td>  -  </td></tr>
     </table>
     */
    public void commentGet(String page, String limit) throws ApiException {
        commentGetWithHttpInfo(page, limit);
    }

    /**
     * 
     * recupera los usuarios
     * @param page página a la que accede la petición (optional)
     * @param limit  (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> error en algún parámetro </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no se encuentra </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentGetWithHttpInfo(String page, String limit) throws ApiException {
        okhttp3.Call localVarCall = commentGetValidateBeforeCall(page, limit, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * recupera los usuarios
     * @param page página a la que accede la petición (optional)
     * @param limit  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> error en algún parámetro </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no se encuentra </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentGetAsync(String page, String limit, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentGetValidateBeforeCall(page, limit, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentIdDelete
     * @param id id del recurse el cual se pretende borrar (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 203 </td><td> cuando se ha borrado </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdDeleteCall(String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/comment/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentIdDeleteValidateBeforeCall(String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling commentIdDelete(Async)");
        }
        

        okhttp3.Call localVarCall = commentIdDeleteCall(id, _callback);
        return localVarCall;

    }

    /**
     * 
     * 
     * @param id id del recurse el cual se pretende borrar (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 203 </td><td> cuando se ha borrado </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public void commentIdDelete(String id) throws ApiException {
        commentIdDeleteWithHttpInfo(id);
    }

    /**
     * 
     * 
     * @param id id del recurse el cual se pretende borrar (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 203 </td><td> cuando se ha borrado </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentIdDeleteWithHttpInfo(String id) throws ApiException {
        okhttp3.Call localVarCall = commentIdDeleteValidateBeforeCall(id, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * 
     * @param id id del recurse el cual se pretende borrar (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 203 </td><td> cuando se ha borrado </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdDeleteAsync(String id, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentIdDeleteValidateBeforeCall(id, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentIdGet
     * @param id id del comentario al cual se pretende acceder (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdGetCall(String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/comment/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentIdGetValidateBeforeCall(String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling commentIdGet(Async)");
        }
        

        okhttp3.Call localVarCall = commentIdGetCall(id, _callback);
        return localVarCall;

    }

    /**
     * 
     * recupera los datos de un comentario el cual coincide con l id que se pasa por parámetro
     * @param id id del comentario al cual se pretende acceder (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
     </table>
     */
    public void commentIdGet(String id) throws ApiException {
        commentIdGetWithHttpInfo(id);
    }

    /**
     * 
     * recupera los datos de un comentario el cual coincide con l id que se pasa por parámetro
     * @param id id del comentario al cual se pretende acceder (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentIdGetWithHttpInfo(String id) throws ApiException {
        okhttp3.Call localVarCall = commentIdGetValidateBeforeCall(id, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * recupera los datos de un comentario el cual coincide con l id que se pasa por parámetro
     * @param id id del comentario al cual se pretende acceder (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdGetAsync(String id, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentIdGetValidateBeforeCall(id, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentIdPatch
     * @param id  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> en caso de error </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdPatchCall(String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/comment/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PATCH", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentIdPatchValidateBeforeCall(String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling commentIdPatch(Async)");
        }
        

        okhttp3.Call localVarCall = commentIdPatchCall(id, _callback);
        return localVarCall;

    }

    /**
     * 
     * actualiza el recurso correspondiente a la id pasada por parámetro
     * @param id  (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> en caso de error </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public void commentIdPatch(String id) throws ApiException {
        commentIdPatchWithHttpInfo(id);
    }

    /**
     * 
     * actualiza el recurso correspondiente a la id pasada por parámetro
     * @param id  (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> en caso de error </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentIdPatchWithHttpInfo(String id) throws ApiException {
        okhttp3.Call localVarCall = commentIdPatchValidateBeforeCall(id, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * actualiza el recurso correspondiente a la id pasada por parámetro
     * @param id  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> en caso de error </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si no existe el recurso </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentIdPatchAsync(String id, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentIdPatchValidateBeforeCall(id, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentLikeIdPatch
     * @param id  (required)
     * @param comment  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentLikeIdPatchCall(String id, InlineObject2 comment, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = comment;

        // create path and map variables
        String localVarPath = "/comment/like/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PATCH", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentLikeIdPatchValidateBeforeCall(String id, InlineObject2 comment, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling commentLikeIdPatch(Async)");
        }
        

        okhttp3.Call localVarCall = commentLikeIdPatchCall(id, comment, _callback);
        return localVarCall;

    }

    /**
     * 
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public void commentLikeIdPatch(String id, InlineObject2 comment) throws ApiException {
        commentLikeIdPatchWithHttpInfo(id, comment);
    }

    /**
     * 
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentLikeIdPatchWithHttpInfo(String id, InlineObject2 comment) throws ApiException {
        okhttp3.Call localVarCall = commentLikeIdPatchValidateBeforeCall(id, comment, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentLikeIdPatchAsync(String id, InlineObject2 comment, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentLikeIdPatchValidateBeforeCall(id, comment, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentLikeRemoveIdPatch
     * @param id  (required)
     * @param comment  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentLikeRemoveIdPatchCall(String id, InlineObject3 comment, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = comment;

        // create path and map variables
        String localVarPath = "/comment/like/remove/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PATCH", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentLikeRemoveIdPatchValidateBeforeCall(String id, InlineObject3 comment, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling commentLikeRemoveIdPatch(Async)");
        }
        

        okhttp3.Call localVarCall = commentLikeRemoveIdPatchCall(id, comment, _callback);
        return localVarCall;

    }

    /**
     * 
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public void commentLikeRemoveIdPatch(String id, InlineObject3 comment) throws ApiException {
        commentLikeRemoveIdPatchWithHttpInfo(id, comment);
    }

    /**
     * 
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentLikeRemoveIdPatchWithHttpInfo(String id, InlineObject3 comment) throws ApiException {
        okhttp3.Call localVarCall = commentLikeRemoveIdPatchValidateBeforeCall(id, comment, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * crea nuevo comentario
     * @param id  (required)
     * @param comment  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> si se actualiza el recurso </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> si hay algún error en la consulta </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> si el recurso al que se pretende acceder no existe </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentLikeRemoveIdPatchAsync(String id, InlineObject3 comment, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentLikeRemoveIdPatchValidateBeforeCall(id, comment, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for commentPost
     * @param comment  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentPostCall(InlineObject1 comment, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = comment;

        // create path and map variables
        String localVarPath = "/comment";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call commentPostValidateBeforeCall(InlineObject1 comment, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = commentPostCall(comment, _callback);
        return localVarCall;

    }

    /**
     * 
     * crea nuevo comentario
     * @param comment  (optional)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
     */
    public void commentPost(InlineObject1 comment) throws ApiException {
        commentPostWithHttpInfo(comment);
    }

    /**
     * 
     * crea nuevo comentario
     * @param comment  (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> commentPostWithHttpInfo(InlineObject1 comment) throws ApiException {
        okhttp3.Call localVarCall = commentPostValidateBeforeCall(comment, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     *  (asynchronously)
     * crea nuevo comentario
     * @param comment  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call commentPostAsync(InlineObject1 comment, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = commentPostValidateBeforeCall(comment, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
}
