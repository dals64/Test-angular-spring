package com.stage.test.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stage.test.api.model.Project;

@Repository
public interface ProjectRepository extends MongoRepository<Project, Long> {
	public List<Project> findByClient(String client);
}
