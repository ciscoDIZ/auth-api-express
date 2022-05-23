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

import org.openapitools.client.ApiException;
import org.openapitools.client.model.InlineObject1;
import org.openapitools.client.model.InlineObject2;
import org.openapitools.client.model.InlineObject3;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for CommentApi
 */
@Ignore
public class CommentApiTest {

    private final CommentApi api = new CommentApi();

    
    /**
     * 
     *
     * recupera los usuarios
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentGetTest() throws ApiException {
        String page = null;
        String limit = null;
        api.commentGet(page, limit);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentIdDeleteTest() throws ApiException {
        String id = null;
        api.commentIdDelete(id);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * recupera los datos de un comentario el cual coincide con l id que se pasa por parámetro
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentIdGetTest() throws ApiException {
        String id = null;
        api.commentIdGet(id);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * actualiza el recurso correspondiente a la id pasada por parámetro
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentIdPatchTest() throws ApiException {
        String id = null;
        api.commentIdPatch(id);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * crea nuevo comentario
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentLikeIdPatchTest() throws ApiException {
        String id = null;
        InlineObject2 comment = null;
        api.commentLikeIdPatch(id, comment);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * crea nuevo comentario
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentLikeRemoveIdPatchTest() throws ApiException {
        String id = null;
        InlineObject3 comment = null;
        api.commentLikeRemoveIdPatch(id, comment);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * crea nuevo comentario
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void commentPostTest() throws ApiException {
        InlineObject1 comment = null;
        api.commentPost(comment);

        // TODO: test validations
    }
    
}