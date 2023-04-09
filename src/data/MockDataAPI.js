import {  programs,exercises, equipments, bodyParts } from './dataArrays';

export function GetWorkoutsProgData(workoutItem) {
  const progsArray = [];
  workoutItem.progs.map(index => {
    programs.map(data => {
      if (data.id == index) {
        progsArray.push(data);
      }
    });
  });
  return progsArray;
}

export function GetProgExercisesData(Prog) {
  const exercisesArray = [];
  Prog.exercises.map(index => {
    exercises.map(data => {
      if (data.id == index) {
        exercisesArray.push(data);
      }
    });
  });
  return exercisesArray;
}

export function GetExerciseEquipsData(Exercise) {
  const equipsArray = [];
  Exercise.equipments.map(index => {
    equipments.map(data => {
      if (data.id == index) {
        equipsArray.push(data);
      }
    });
  });
  return equipsArray;
}

export function GetExerciseBodyPartsData(Exercise) {
  const bodyPartsArray = [];
  Exercise.bodyParts.map(index => {
    bodyParts.map(data => {
      if (data.id == index) {
        bodyPartsArray.push(data);
      }
    });
  });
  return bodyPartsArray;
}