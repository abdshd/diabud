import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createItem, updateItem } from '../graphql/mutations'
import { listItems } from '../graphql/queries'

function Testing() {
  const initialState = {
    name: '',
    unit: '',
    quantity: ''
  };

  const initialStateUpdate = {
    id: '',
    name: '',
    unit: '',
    quantity: ''
  };

  const [items, setItems] = useState([]);

  const [formState, setFormState] = useState(initialState);

  const [updateFormState, setUpdateFormState] = useState(initialStateUpdate);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const setAddInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  }

  const setUpdateInput = (key, value) => {
    setUpdateFormState(prevState => ({ ...prevState, [key]: value }));
  }

  const fetchItems = async () => {
    try {
      const itemData = await API.graphql(graphqlOperation(listItems));
      const items = itemData.data.listItems.items;

      setItems(items);
    } catch (err) {
      console.log('error fetching items', err);
    }
  };

  const addItem = async() => {
    try {
      if (!formState.name || !formState.unit || !formState.quantity) return;
      const item = { ...formState };
      setItems([ ...items, item ]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createItem, {input: item}));
    } catch (err) {
      console.log('error fetching items', err);
    }
  };

  const handleSelectedItem = e => {
    const selectedItemId = e.target.value;

    const item = items.find(item => item.id === selectedItemId)

    setUpdateInput('id', item.id);
    setUpdateInput('name', item.name);
    setUpdateInput('quantity', item.quantity);
    setUpdateInput('unit', item.unit);
  }

  const handleUpdate = async() => {
    try {
      if (!updateFormState.id || !updateFormState.name || !updateFormState.unit || !updateFormState.quantity) return;
      const item = { ...updateFormState };
      setUpdateFormState(initialStateUpdate);
      await API.graphql(graphqlOperation(updateItem, {input: item}));
    } catch (err) {
      console.log('error updating item', err);
    }
  }

  return (
    <div className='App' style={styles.container}>
      <h2>Diabud</h2>
      <div className='display' style={styles.container}>
        <input
          onChange={e => setAddInput('name', e.target.value)}
          value={formState.name}
          placeholder='Name'
          style={styles.input}/>
        <input
          onChange={e => setAddInput('unit', e.target.value)}
          value={formState.unit}
          placeholder='Unit'
          style={styles.input}/>
        <input
          onChange={e => setAddInput('quantity', e.target.value)}
          value={formState.quantity}
          placeholder='Quantity'
          style={styles.input}/>

        <button onClick={addItem} style={styles.button}>Create Item</button>
        {
          items.map((item, index) => (
            <div key={item.id ? item.id : index} style={styles.item}>
              <p>Name: {item.name}, Unit: {item.unit}, Quantity: {item.quantity}</p>
            </div>
          ))
        }
      </div>
      <div className='update' style={styles.container}>
        <select value={''} onChange={handleSelectedItem}>
          <option value=''>Select an item</option>
          {
            items.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))
          }
        </select>
        {
          (() => {
            if (updateFormState.id !== "") {
              return (
                <div>
                  <input
                    onChange={e => setUpdateInput('name', e.target.value)}
                    value={updateFormState.name}
                    placeholder='Name'
                    style={styles.input}/>
                  <input
                    onChange={e => setUpdateInput('unit', e.target.value)}
                    value={updateFormState.unit}
                    placeholder='Unit'
                    style={styles.input}/>
                  <input
                    onChange={e => setUpdateInput('quantity', e.target.value)}
                    value={updateFormState.quantity}
                    placeholder='Quantity'
                    style={styles.input}/>
                </div>
              );
            }
          })()
        }
        <button onClick={handleUpdate} style={styles.button}>Update Item</button>
      </div>
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: 10 },
  item: { marginBottom: 10 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '8px 0px' }
}

export default withAuthenticator(Testing);