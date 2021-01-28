package com.stage.test.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document
public class Project {
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getProjet() {
		return projet;
	}
	public void setProjet(String projet) {
		this.projet = projet;
	}
	public String getIntervenant() {
		return intervenant;
	}
	public void setIntervenant(String intervenant) {
		this.intervenant = intervenant;
	}
	public String getEcheance() {
		return echeance;
	}
	public void setEcheance(String echeance) {
		this.echeance = echeance;
	}
	public int getCharge() {
		return charge;
	}
	public void setCharge(int charge) {
		this.charge = charge;
	}
	public String getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}
	public String getActivite() {
		return activite;
	}
	public void setActivite(String activite) {
		this.activite = activite;
	}
	public String getTechnologie() {
		return technologie;
	}
	public void setTechnologie(String technologie) {
		this.technologie = technologie;
	}
	public String getModif() {
		return modif;
	}
	public void setModif(String modif) {
		this.modif = modif;
	}
	public int getTache1() {
		return tache1;
	}
	public void setTache1(int tache1) {
		this.tache1 = tache1;
	}
	public int getTache2() {
		return tache2;
	}
	public void setTache2(int tache2) {
		this.tache2 = tache2;
	}
	public int getTache3() {
		return tache3;
	}
	public void setTache3(int tache3) {
		this.tache3 = tache3;
	}
	public int getTache4() {
		return tache4;
	}
	public void setTache4(int tache4) {
		this.tache4 = tache4;
	}
	public int getTechnique() {
		return technique;
	}
	public void setTechnique(int technique) {
		this.technique = technique;
	}
	public int getPerformance() {
		return performance;
	}
	public void setPerformance(int performance) {
		this.performance = performance;
	}
	public int getErgonomie() {
		return ergonomie;
	}
	public void setErgonomie(int ergonomie) {
		this.ergonomie = ergonomie;
	}
	public int getFonctionMetier() {
		return fonctionMetier;
	}
	public void setFonctionMetier(int fonctionMetier) {
		this.fonctionMetier = fonctionMetier;
	}
	public int getIntuitivite() {
		return intuitivite;
	}
	public void setIntuitivite(int intuitivite) {
		this.intuitivite = intuitivite;
	}
	
	@Id
	long id;
	
	private String client;
	private String projet;
	private String intervenant;
	private String echeance;
	private int charge;
	private String dateDebut;
	private String activite;
	private String technologie;
	private String modif = "";
	private int tache1 = 0;
	private int tache2 = 0;
	private int tache3 = 0;
	private int tache4 = 0;
	private int technique = 0;
	private int performance = 0;
	private int ergonomie = 0;
	private int fonctionMetier = 0;
	private int intuitivite = 0;
}
