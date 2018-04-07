package com.sapo.algos.web.listener;

import com.sapo.algos.common.dao.DaoLookup;
import com.sapo.algos.common.dao.SystemPropDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.util.Date;

/**
 * Created by giampaolo.saporito on 15/12/2016.
 * Startup and shutdown listener
 */
@WebListener
public class WebAppListener implements ServletContextListener
{
	private static final Logger logger = LogManager.getLogger( WebAppListener.class  );

	@Override
	public void contextInitialized( ServletContextEvent sce )
	{
		System.out.println("===================================================");
		System.out.println(" Algos System started " + ( new Date().toString() ) );
		System.out.println("===================================================");

		SystemPropDao sysDao = DaoLookup.getDao( SystemPropDao.class );
		String enviName = sysDao.getEnvironmentName();
		
		logger.debug("===================================================" );
		logger.debug("Algos System Started at: "+ ( new Date().toString() ) +"- environment: " + enviName );
		logger.debug("===================================================" );
	}

	@Override
	public void contextDestroyed( ServletContextEvent sce )
	{
		System.out.println("===================================================");
		System.out.println(" Algos System end " + (new Date().toString()) );
		System.out.println("===================================================");
		
		logger.debug("===================================================" );
		logger.debug("Algos System stop at: "+ new Date().toString() );
		logger.debug("===================================================" );
	}
}
