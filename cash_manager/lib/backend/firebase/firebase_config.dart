import 'package:cash_manager/firebase_options.dart';
import 'package:firebase_core/firebase_core.dart';

Future initFirebase() async {
<<<<<<< HEAD
<<<<<<< HEAD
  await Firebase.initializeApp();
=======
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
>>>>>>> 492f1d6 (finished)
=======
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
>>>>>>> 492f1d6 (finished)
}
