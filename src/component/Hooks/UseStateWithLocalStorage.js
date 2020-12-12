import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UseStateWithLocalStorage = (localStorageKey) => {
  const [todos, setTodos] = useState(
    // INISIALISASI AWAL, mengambil data di local storage dan merubahnya menjadi sebuah object. Conditional, jika tidak ada return yg dikembalikan, maka akan membuat array kosong
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  // jika tidak ada localStorage key, maka lemparkan error
  if (!localStorageKey) {
    // tampilkan error
    throw new Error("You have to passed in a localStorage key as an argument!");
  }

  // JSON.stringify = mengubah data object / apapun bentuknya menjadi string.
  // Parameter kedua berisikan array dari value yang dikendalikan. Hal ini bertujuan agar useEffect hanya bereaksi ketika todos mengalami perubahan. Kalo todos tidak mengalami perubahan, maka useEffect tidak dijalankan [OPTIMIZATION]
  // Jika ada perubahan pada todos dan localStorageKey (line 21,parameter 2), maka useEffect akan dijalankan
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

UseStateWithLocalStorage.propTypes = {
  localStorageKey: PropTypes.string.isRequired,
};

export default UseStateWithLocalStorage;
