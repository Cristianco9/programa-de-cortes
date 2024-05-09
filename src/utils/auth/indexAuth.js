/**
 * Module for configuring Passport authentication strategies.
 * @module indexAuth
 */
// Import Passport for authentication
import passport from 'passport';
// Import local authentication strategy for traditional web authentication
import { LocalStrategy } from './strategies/local.strategy.js';
// Import GraphQL local authentication strategy for GraphQL API authentication
import { GQLLocalStrategy } from './strategies/local-gql.strategy.js';

/**
 * Configure Passport authentication strategies.
 * This module configures Passport to use two authentication strategies:
 * 1. LocalStrategy: For traditional web authentication using username and password.
 * 2. GQLLocalStrategy: For GraphQL API authentication using username and password.
 */
// Use LocalStrategy for traditional web authentication
passport.use(LocalStrategy);
// Use GQLLocalStrategy for GraphQL API authentication
passport.use(GQLLocalStrategy);
