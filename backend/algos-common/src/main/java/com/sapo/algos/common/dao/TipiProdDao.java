package com.sapo.algos.common.dao;

import com.sapo.algos.common.dto.CodiceDescrizione;

import java.util.List;

/**
 * Created by giampaolo.saporito
 * on 03.01.2018 - mercoledì
 */
public interface TipiProdDao extends AlgosCommonDao
{
	List<CodiceDescrizione > getAllTipiProdotto();
	CodiceDescrizione getTipoProdottoByCodice( String codice );
}
