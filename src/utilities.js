export const addIdToDoc = doc => {
      return {
        id: doc.id,
        ...doc.data()
        }
      }