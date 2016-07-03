package com.questionanswer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.resource.GzipResourceResolver;

@Configuration
@Import(RepositoryRestMvcConfiguration.class)
public class RestData extends RepositoryRestMvcConfiguration {

	private static final int CACHE_TIME = 60 * 60 * 24; // 24 hours
	protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.setBasePath(Routes.API_BASE_ROUTE);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		super.addResourceHandlers(registry);
		registry.addResourceHandler("/**")
			.addResourceLocations("classpath:/static/")
			.setCachePeriod(CACHE_TIME)
			.resourceChain(true)
			.addResolver(new GzipResourceResolver());
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}