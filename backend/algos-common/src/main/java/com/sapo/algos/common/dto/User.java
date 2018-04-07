package com.sapo.algos.common.dto;

import com.sapo.algos.common.JsonProducer;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by giampaolo.saporito
 * on 29.12.2017 - venerdì
 */
public interface User extends Serializable, JsonProducer
{
	Long getId();

	String getCode();

	void setCode( String code );

	String getUsername();

	void setUsername( String username );

	String getPassword();

	void setPassword( String password );

	Timestamp gettInsert();

	void settInsert( Timestamp tInsert );

	Boolean isEnabled();

	void setEnabled( Boolean enabled );
}
