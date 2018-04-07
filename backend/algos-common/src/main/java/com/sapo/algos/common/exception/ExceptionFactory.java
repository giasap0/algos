package com.sapo.algos.common.exception;

/**
 * Created by giampaolo.saporito on 20/12/2016.
 *
 * Only static methods
 */
public final class ExceptionFactory
{
	private ExceptionFactory() {}

	public static AlgosException onEntityNotFound( Class<?> daoClass) {
		return new AlgosException("Entity not found", daoClass );
	}
	
}
