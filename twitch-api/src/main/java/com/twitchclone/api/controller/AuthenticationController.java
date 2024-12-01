package com.twitchclone.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.server.ResponseStatusException;

import com.twitchclone.api.security.*;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService; // Добавлено для получения UserDetails

    @PostMapping("/authenticate")
    @ResponseStatus(HttpStatus.OK)
    public AuthResponse createAuthenticationToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            System.out.println(authentication);
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Имя или пароль неправильны", e);
        }
        String jwt = jwtTokenUtil.generateToken((UserDetails) authentication.getPrincipal());
        return new AuthResponse(jwt);
    }

    @PostMapping("/refresh-token")
    @ResponseStatus(HttpStatus.OK)
    public AuthResponse refreshToken(@RequestBody String token) {
        String username = jwtTokenUtil.extractUsername(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username); // Получаем UserDetails
        if (username != null && jwtTokenUtil.validateToken(token, userDetails)) {
            String newToken = jwtTokenUtil.generateToken(userDetails); // Генерация нового токена
            return new AuthResponse(newToken);
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Токен истек или недействителен");
        }
    }
}