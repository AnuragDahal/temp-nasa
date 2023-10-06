 const getDocumentId = async function(userId) {
    const db = getFirestore();
    const collectionRef = collection(db, 'users');
    const documentRef = doc(collectionRef, userId);
  
    // Check if the document exists.
    const snapshot = await getDoc(documentRef);
  
    if (snapshot.exists) {
      // The document exists, so return the document ID.
      return snapshot.id;
    } else {
      // The document does not exist, so create it and return the document ID.
      await setDoc(documentRef, {});
      return documentRef.id;
    }
  }