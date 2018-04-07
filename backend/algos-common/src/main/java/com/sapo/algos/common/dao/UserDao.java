package com.sapo.algos.common.dao;

import com.sapo.algos.common.dto.User;

import java.io.Serializable;

/**
 * Created by giampaolo.saporito
 * on 28.12.2017 - giovedì
 */
public interface UserDao extends AlgosCommonDao, Serializable
{
	User getUserByName( String username );
	String getUserServiceKey( String username );
}
