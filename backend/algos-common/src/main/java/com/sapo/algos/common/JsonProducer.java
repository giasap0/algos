package com.sapo.algos.common;

import javax.json.JsonObject;

/**
 * Created by giampaolo.saporito
 * on 28.12.2017 - giovedì
 */
public interface JsonProducer
{
	String toJSon();
	JsonObject getJson();
}
