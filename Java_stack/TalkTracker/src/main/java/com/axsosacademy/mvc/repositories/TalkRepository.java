package com.axsosacademy.mvc.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axsosacademy.mvc.models.Talk;

@Repository
	public interface TalkRepository extends JpaRepository <Talk, Long> {

	    Optional<Talk> findById(Long id);
	}



