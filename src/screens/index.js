import { AppNavigation } from '../common';

import Home from './home/Home';
import Menu from './menu/Menu';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import AboutUs from './aboutus/AboutUs';
import Workouts from './workouts/Workouts';
import Trainings from './trainings/Trainings';
import Category from './category/Category';
import Programs from './programs/Programs';
import ProgramDetails from './programDetails/ProgramDetails';
import ExerciseDetails from './exerciseDetails/ExerciseDetails';

export default () => {
  AppNavigation.registerScreen('home', Home);
  AppNavigation.registerScreen('menu', Menu);
  AppNavigation.registerScreen('signin', SignIn);
  AppNavigation.registerScreen('signup', SignUp);
  AppNavigation.registerScreen('aboutus', AboutUs);
  AppNavigation.registerScreen('workouts', Workouts);
  AppNavigation.registerScreen('category', Category);
  AppNavigation.registerScreen('programs', Programs);
  AppNavigation.registerScreen('programDetails', ProgramDetails);
  AppNavigation.registerScreen('exerciseDetails', ExerciseDetails);
  AppNavigation.registerScreen('trainings', Trainings);
};
