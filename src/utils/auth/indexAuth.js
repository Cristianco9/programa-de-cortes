const passport = import('passport');

const LocalStrategy = import('./strategies/local.strategy');

passport.use(LocalStrategy);