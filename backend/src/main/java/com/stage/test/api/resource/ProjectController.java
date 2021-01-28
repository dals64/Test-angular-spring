package com.stage.test.api.resource;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stage.test.api.model.Project;
import com.stage.test.api.repository.ProjectRepository;

@RestController
@CrossOrigin(origins="*")
public class ProjectController {
	
	@Autowired
	private ProjectRepository repository;
	
	@PostMapping("/addProject")
	public String saveProject(@RequestBody Project project) {
		
		long id = 1;
		int i = repository.findAll().size();
		if (i != 0) {
			id = repository.findAll().get(i-1).getId()+1;
		}
		project.setId(id);
		repository.save(project);
		return "Project créé avec succès";
	}
	
	
	@PostMapping("/update")
	public String updateProject(@RequestBody Project project) {
		List<Project> list = repository.findAll();
		ArrayList<Long> ids = new ArrayList();
		ids.add(project.getId());
		Iterable<Project> result = repository.findAllById(ids);
		Project p = result.iterator().next();
				p.setTache1(project.getTache1());
				p.setTache2(project.getTache2());
				p.setTache3(project.getTache3());
				p.setTache4(project.getTache4());
				p.setErgonomie(project.getErgonomie());
				p.setPerformance(project.getPerformance());
				p.setFonctionMetier(project.getFonctionMetier());
				p.setTechnique(project.getTechnique());
				p.setIntuitivite(project.getIntuitivite());
				p.setModif(project.getModif());
				repository.save(p);	
				
				return "Mise à jour éffectuée " +p.getId();
	}
	
	@GetMapping("/findAllProjects")
	public List<Project> getAllProjects(){
		return repository.findAll();
	}
	
	@PostMapping("/findProjects")
	public Iterable<Project> getManyProjects(@RequestBody ArrayList<Long> ids){
		return repository.findAllById(ids);
	}
	
	
	@PostMapping("/findByName")
	public List<Project> getProjectsByClientsName(@RequestBody String client){
		return repository.findByClient(client);
	}
	
	
	@GetMapping("/find/{id}")
	public Optional<Project> getProject(@PathVariable long id){
		return repository.findById(id);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteProject(@PathVariable long id) {
		repository.deleteById(id);
		return "Projet supprimé";
	}

}
