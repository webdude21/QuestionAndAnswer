package com.questionanswer.config;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.resource.GzipResourceResolver;
import com.questionanswer.service.SeederService;

@Configuration
@Import(RepositoryRestMvcConfiguration.class)
public class RestData extends RepositoryRestMvcConfiguration {

	private static final int CACHE_TIME = 60 * 60 * 24; // 24 hours

	@Autowired
	private SeederService seeder;

	@Override
	protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		super.configureRepositoryRestConfiguration(config);
		try {
			config.setBaseUri(new URI(Routes.API_BASE_ROUTE));
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		super.addResourceHandlers(registry);
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/").setCachePeriod(CACHE_TIME)
				.resourceChain(true).addResolver(new GzipResourceResolver());
	}

	@Override
	public RepositoryRestConfiguration config() {
		seeder.seed();
		return super.config();
	}
}