import { PaperProvider, Text } from "react-native-paper"
import Navigation from "./src/navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

export default App;