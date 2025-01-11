import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Definindo o tipo para Goal
interface Goal {
  id: string;
  title: string;
  completed: boolean;
}

const HomeScreen = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', title: 'Beber 2 Litros de Água', completed: false },
    { id: '2', title: 'Aprender Inglês', completed: false },
  ]);

  const addGoal = () => {
    // Função para adicionar um novo objetivo
    console.log('Adicionar objetivo');
  };

  // Definindo o tipo do parâmetro { item }
  const renderGoal = ({ item }: { item: Goal }) => (
    <View style={styles.goalCard}>
      <Text style={styles.goalTitle}>{item.title}</Text>
      <Text>Status: {item.completed ? 'Concluído' : 'Pendente'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Objetivos</Text>
      <FlatList
        data={goals}
        renderItem={renderGoal}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addGoal}>
        <Text style={styles.addButtonText}>Adicionar Objetivo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  goalCard: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
