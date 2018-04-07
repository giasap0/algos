package com.sapo.algos.common.dao;

import com.sapo.algos.common.entities.Entity_SystemProp;

public interface SystemPropDao extends AlgosCommonDao
{
	Entity_SystemProp getSystemPropByCode( String code );
	String getEnvironmentName();
}
