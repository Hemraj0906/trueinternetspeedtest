


// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title:
//     "Disclaimer - TrueInternetSpeedTest | Speed Test Results Accuracy Warning",
//   description:
//     "⚠️ Internet speed test disclaimer: WiFi speed test, broadband speed test, Jio speed test results are ESTIMATES only. No accuracy guarantee. Factors affecting speed test accuracy, ISP dispute warning, liability limitation.",
//   keywords:
//     "internet speed test disclaimer, speed test results accuracy, wifi speed test disclaimer, broadband speed test notice, speed test accuracy warning, Jio speed test accurate, network speed test results, check internet speed disclaimer",
// };

// export default function DisclaimerPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:to-rose-900">
//       <div className="container mx-auto px-4 py-12 lg:py-20">
//         <div className="max-w-6xl mx-auto">
//           {/* SEO-Optimized Hero */}
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center bg-gradient-to-r from-rose-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl mb-8 tracking-wide">
//               <span className="text-2xl mr-3">⚠️</span>
//               SPEED TEST RESULTS DISCLAIMER
//             </div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight">
//               Internet Speed Test Disclaimer
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
//               Last Updated:{" "}
//               <span className="font-bold text-rose-600">March 8, 2026</span>
//             </p>
//             <p className="text-lg font-semibold text-rose-700 dark:text-rose-300 max-w-3xl mx-auto">
//               <strong>
//                 ALL SPEED TEST RESULTS ARE ESTIMATES - NO ACCURACY GUARANTEE
//               </strong>
//             </p>
//           </div>

//           <div className="prose prose-xl dark:prose-invert max-w-none space-y-20">
//             {/* Primary Warning - Featured Snippet Target */}
//             <section>
//               <h2 className="text-4xl font-black mb-12 text-gray-800 dark:text-white border-b-4 border-rose-200 dark:border-rose-800 pb-8">
//                 🚨 Internet Speed Test Results Are ESTIMATES Only
//               </h2>
//               <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 text-white p-12 lg:p-20 rounded-4xl shadow-2xl mb-16">
//                 <div className="grid lg:grid-cols-2 gap-12 text-xl max-w-6xl mx-auto">
//                   <div>
//                     <h3 className="text-3xl font-bold mb-8 text-yellow-200">
//                       What Users Need To Know:
//                     </h3>
//                     <ul className="space-y-6 text-2xl leading-relaxed">
//                       <li>
//                         • <strong>Internet speed test</strong> = snapshot
//                         measurement
//                       </li>
//                       <li>
//                         • <strong>WiFi speed test</strong> = current conditions
//                         only
//                       </li>
//                       <li>
//                         • <strong>Broadband speed test</strong> = approximate
//                         results
//                       </li>
//                       <li>• Results vary 20-50% between tests</li>
//                       <li>
//                         •{" "}
//                         <span className="text-3xl font-black text-yellow-300">
//                           NO LEGAL ACCURACY GUARANTEE
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-bold mb-8 text-yellow-200">
//                       TrueInternetSpeedTest Liability:
//                     </h3>
//                     <ul className="space-y-6 text-2xl leading-relaxed">
//                       <li>• Not liable for ISP disputes</li>
//                       <li>• No responsibility for speed claims</li>
//                       <li>• Cannot guarantee advertised speeds</li>
//                       <li>• "AS IS" service without warranties</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Featured Snippet Table - SEO Gold */}
//             <section>
//               <h2 className="text-4xl font-black mb-16 text-gray-800 dark:text-white border-b-4 border-yellow-200 dark:border-yellow-800 pb-8">
//                 📊 Factors Affecting Speed Test Accuracy
//               </h2>
//               <div className="overflow-x-auto shadow-2xl rounded-4xl">
//                 <table className="min-w-full bg-white dark:bg-gray-800/80 border-8 border-gray-200 dark:border-gray-700 rounded-4xl">
//                   <thead className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
//                     <tr>
//                       <th className="px-12 py-8 text-left text-2xl font-black text-gray-900 rounded-tl-4xl">
//                         Factor
//                       </th>
//                       <th className="px-12 py-8 text-left text-2xl font-black text-gray-900">
//                         Impact On Results
//                       </th>
//                       <th className="px-12 py-8 text-left text-2xl font-black text-gray-900 rounded-tr-4xl">
//                         Real Examples
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//                     <tr className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all h-24">
//                       <td className="px-12 py-8">
//                         <div className="text-2xl font-bold text-gray-900 dark:text-white">
//                           🌐 Network Congestion
//                         </div>
//                       </td>
//                       <td className="px-12 py-8 text-xl text-gray-700 dark:text-gray-300">
//                         Peak hours = 30-70% speed drop
//                       </td>
//                       <td className="px-12 py-8 text-xl">
//                         6-10 PM evenings, weekends
//                       </td>
//                     </tr>
//                     <tr className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all h-24">
//                       <td className="px-12 py-8">
//                         <div className="text-2xl font-bold text-gray-900 dark:text-white">
//                           📱 Device Performance
//                         </div>
//                       </td>
//                       <td className="px-12 py-8 text-xl text-gray-700 dark:text-gray-300">
//                         Old devices = lower test scores
//                       </td>
//                       <td className="px-12 py-8 text-xl">
//                         iPhone 8, 4GB RAM laptops
//                       </td>
//                     </tr>
//                     <tr className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all h-24">
//                       <td className="px-12 py-8">
//                         <div className="text-2xl font-bold text-gray-900 dark:text-white">
//                           🏪 ISP Throttling
//                         </div>
//                       </td>
//                       <td className="px-12 py-8 text-xl text-gray-700 dark:text-gray-300">
//                         Providers limit streaming/gaming
//                       </td>
//                       <td className="px-12 py-8 text-xl">
//                         Jio Netflix throttle, Airtel gaming limits
//                       </td>
//                     </tr>
//                     <tr className="bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 hover:from-rose-200 hover:to-orange-200 border-t-8 border-rose-300 dark:border-rose-700 h-28">
//                       <td className="px-12 py-8">
//                         <div className="text-3xl font-black text-rose-900 dark:text-rose-100">
//                           👥 Multiple Devices
//                         </div>
//                       </td>
//                       <td className="px-12 py-8 text-2xl font-bold text-rose-900 dark:text-rose-100">
//                         Bandwidth shared across household
//                       </td>
//                       <td className="px-12 py-8 text-2xl font-bold text-rose-900 dark:text-rose-100">
//                         4K TV + gaming + 5 phones
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             {/* ISP Warning - High SEO Value */}
//             <section>
//               <h2 className="text-4xl font-black mb-16 text-gray-800 dark:text-white border-b-4 border-blue-200 dark:border-blue-800 pb-8">
//                 ⚖️ ISP Dispute Warning - Legal Protection Notice
//               </h2>
//               <div className="grid lg:grid-cols-2 gap-16 mb-20">
//                 <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-12 lg:p-20 rounded-5xl shadow-2xl">
//                   <div className="text-5xl font-black mb-12 text-center text-yellow-200">
//                     🚫 NOT FOR
//                   </div>
//                   <h3 className="text-4xl font-bold mb-12 text-center">
//                     ISP Legal Claims
//                   </h3>
//                   <ul className="space-y-8 text-2xl leading-relaxed text-center">
//                     <li>❌ ISP contract enforcement</li>
//                     <li>❌ Legal speed guarantees</li>
//                     <li>❌ Regulatory complaints</li>
//                     <li>❌ Refund/discount demands</li>
//                     <li>❌ Court evidence submission</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-12 lg:p-20 rounded-5xl shadow-2xl">
//                   <div className="text-5xl font-black mb-12 text-center text-yellow-200">
//                     ✅ SAFE FOR
//                   </div>
//                   <h3 className="text-4xl font-bold mb-12 text-center">
//                     Personal Use Only
//                   </h3>
//                   <ul className="space-y-8 text-2xl leading-relaxed text-center">
//                     <li>✅ Network troubleshooting</li>
//                     <li>✅ Performance awareness</li>
//                     <li>✅ Speed comparisons</li>
//                     <li>✅ Educational reference</li>
//                     <li>✅ Personal diagnostics</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Liability Shield */}
//             <section>
//               <h2 className="text-4xl font-black mb-16 text-gray-800 dark:text-white border-b-4 border-purple-200 dark:border-purple-800 pb-8">
//                 🛡️ "AS IS" Service - Complete Liability Protection
//               </h2>
//               <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-20 rounded-5xl shadow-2xl text-center">
//                 <div className="text-6xl font-black mb-16">NO LIABILITY</div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-3xl font-bold mb-16">
//                   <div className="p-8 bg-white/20 rounded-4xl backdrop-blur-xl">
//                     No Direct Damages
//                   </div>
//                   <div className="p-8 bg-white/20 rounded-4xl backdrop-blur-xl">
//                     No Indirect Damages
//                   </div>
//                   <div className="p-8 bg-white/20 rounded-4xl backdrop-blur-xl">
//                     No ISP Disputes
//                   </div>
//                   <div className="p-8 bg-white/20 rounded-4xl backdrop-blur-xl">
//                     No Consequential Loss
//                   </div>
//                 </div>
//                 <p className="text-2xl font-bold tracking-wide">
//                   TrueInternetSpeedTest provided "AS IS" WITHOUT ANY WARRANTIES
//                   OR GUARANTEES
//                 </p>
//               </div>
//             </section>
//           </div>

//           {/* Mega CTA */}
//           <section className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 text-white p-20 lg:p-32 rounded-6xl shadow-2xl text-center mb-24">
//             <h2 className="text-5xl lg:text-7xl font-black mb-12 leading-tight">
//               Understood Speed Test Limitations?
//             </h2>
//             <p className="text-3xl mb-16 opacity-95 max-w-4xl mx-auto leading-relaxed">
//               Results are for personal reference. Ready to test anyway?
//             </p>
//             <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
//               <Link
//                 href="/speed-test"
//                 className="bg-white text-rose-600 hover:text-rose-700 px-16 py-10 rounded-5xl font-black text-3xl shadow-2xl hover:shadow-4xl transform hover:-translate-y-4 transition-all duration-500 flex items-center space-x-4 group"
//               >
//                 <span>🚀</span>
//                 <span>START INTERNET SPEED TEST</span>
//                 <svg
//                   className="w-8 h-8 group-hover:translate-x-2 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </Link>
//               <Link
//                 href="/wifi-speed-test"
//                 className="border-4 border-white/80 hover:border-white text-white hover:bg-white hover:text-rose-600 px-16 py-10 rounded-5xl font-black text-3xl shadow-2xl hover:shadow-4xl transform hover:-translate-y-4 transition-all duration-500 flex items-center space-x-4"
//               >
//                 <span>📶</span>
//                 <span>WIFI SPEED TEST</span>
//               </Link>
//             </div>
//           </section>

//           {/* AdSense Footer */}
//           <footer className="border-t-4 border-rose-200 dark:border-rose-800 pt-20 pb-16">
//             <div className="flex flex-wrap justify-center gap-12 lg:gap-20 text-2xl font-black text-gray-700 dark:text-gray-300 mb-16">
//               <Link
//                 href="/privacy-policy"
//                 className="hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border-b-4 border-transparent hover:border-rose-600 pb-4 px-6 py-2 rounded-xl hover:bg-rose-50"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 href="/terms"
//                 className="hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border-b-4 border-transparent hover:border-rose-600 pb-4 px-6 py-2 rounded-xl hover:bg-rose-50"
//               >
//                 Terms & Conditions
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border-b-4 border-transparent hover:border-rose-600 pb-4 px-6 py-2 rounded-xl hover:bg-rose-50"
//               >
//                 Contact Support
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 border-b-4 border-transparent hover:border-rose-600 pb-4 px-6 py-2 rounded-xl hover:bg-rose-50"
//               >
//                 About Us
//               </Link>
//             </div>
//             <div className="text-center">
//               <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
//                 © 2026 TrueInternetSpeedTest.com
//               </p>
//               <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                 Internet Speed Test Disclaimer | Results Are Estimates | No
//                 Liability Guaranteed
//               </p>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// }




// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Disclaimer - TrueInternetSpeedTest | Speed Test Results Accuracy",
//   description:
//     "Internet speed test disclaimer: WiFi speed test, broadband speed test results are estimates only. Factors affecting accuracy and liability information.",
// };

// export default function DisclaimerPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-gray-800">
//       <div className="container mx-auto px-6 py-16 lg:py-24 max-w-4xl">
//         {/* Clean Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-amber-200">
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Important Notice
//           </div>
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//             Speed Test Results Disclaimer
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Last Updated: March 8, 2026
//           </p>
//         </div>

//         <div className="space-y-16">
//           {/* Main Warning */}
//           <section className="bg-white/60 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
//               Speed Test Results Are Estimates Only
//             </h2>
//             <div className="grid md:grid-cols-2 gap-8 text-lg">
//               <div>
//                 <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                   TrueInternetSpeedTest provides <strong>approximate</strong>{" "}
//                   measurements of your internet connection. Results represent a
//                   snapshot at the time of testing and may vary significantly due
//                   to network conditions.
//                 </p>
//                 <ul className="space-y-3 text-gray-700 dark:text-gray-300">
//                   <li>
//                     • Internet speed test results are not guaranteed accurate
//                   </li>
//                   <li>• WiFi speed test results depend on signal strength</li>
//                   <li>• Broadband speed test results vary by time of day</li>
//                 </ul>
//               </div>
//               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border">
//                 <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
//                   Key Factors:
//                 </h4>
//                 <ul className="space-y-2 text-sm">
//                   <li>• Network congestion (peak hours)</li>
//                   <li>• Device performance limitations</li>
//                   <li>• Multiple devices sharing bandwidth</li>
//                   <li>• Distance from testing servers</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Clean Factors Table */}
//           <section>
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
//               Factors Affecting Test Accuracy
//             </h2>
//             <div className="overflow-x-auto rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
//               <table className="min-w-full bg-white/80 dark:bg-white/10 backdrop-blur-xl">
//                 <thead>
//                   <tr className="border-b border-gray-200 dark:border-gray-700">
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
//                       Factor
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
//                       Impact
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
//                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
//                       Network Congestion
//                     </td>
//                     <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
//                       Peak hours reduce speeds 30-70%
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
//                       Device Performance
//                     </td>
//                     <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
//                       Older devices show lower results
//                     </td>
//                   </tr>
//                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
//                       ISP Throttling
//                     </td>
//                     <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
//                       Streaming/gaming speed limits
//                     </td>
//                   </tr>
//                   <tr className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
//                     <td className="px-6 py-4 font-semibold text-blue-900 dark:text-blue-300">
//                       Multiple Devices
//                     </td>
//                     <td className="px-6 py-4 font-semibold text-blue-900 dark:text-blue-300">
//                       Bandwidth shared across household
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* Liability Section */}
//           <section className="bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900/20 p-8 lg:p-12 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
//               No Liability - "AS IS" Service
//             </h2>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
//               TrueInternetSpeedTest is provided "AS IS" without warranties. We
//               are not responsible for:
//             </p>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="p-6 bg-white/50 dark:bg-white/10 rounded-xl border">
//                 <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
//                   Not Liable For:
//                 </h4>
//                 <ul className="space-y-2 text-sm">
//                   <li>• ISP contract disputes</li>
//                   <li>• Damages from test results</li>
//                   <li>• Speed guarantee claims</li>
//                 </ul>
//               </div>
//               <div className="p-6 bg-white/50 dark:bg-white/10 rounded-xl border">
//                 <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
//                   Safe For:
//                 </h4>
//                 <ul className="space-y-2 text-sm">
//                   <li>• Personal troubleshooting</li>
//                   <li>• Performance awareness</li>
//                   <li>• Educational purposes</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* CTA Section */}
//           <section className="text-center py-20 border-t border-gray-200/50 dark:border-gray-700/50">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
//               Ready to Test Your Connection?
//             </h2>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
//               <Link
//                 href="/speed-test"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
//               >
//                 Start Internet Speed Test
//               </Link>
//               <Link
//                 href="/wifi-speed-test"
//                 className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto text-center"
//               >
//                 WiFi Speed Test
//               </Link>
//             </div>
//           </section>
//         </div>

//         {/* Clean Footer */}
//         <footer className="mt-24 pt-12 border-t border-gray-200/50 dark:border-gray-700/50">
//           <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-lg font-medium text-gray-600 dark:text-gray-400 mb-8">
//             <Link
//               href="/privacy-policy"
//               className="hover:text-blue-600 transition-colors"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/terms"
//               className="hover:text-blue-600 transition-colors"
//             >
//               Terms & Conditions
//             </Link>
//             <Link
//               href="/contact-us"
//               className="hover:text-blue-600 transition-colors"
//             >
//               Contact Us
//             </Link>
//             <Link
//               href="/about"
//               className="hover:text-blue-600 transition-colors"
//             >
//               About Us
//             </Link>
//           </div>
//           <p className="text-center text-sm text-gray-500 dark:text-gray-500">
//             © 2026 TrueInternetSpeedTest.com - All speed test results are
//             estimates only
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }




// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Disclaimer - TrueInternetSpeedTest | Internet Speed Test Accuracy",
//   description:
//     "Disclaimer for TrueInternetSpeedTest.com. Internet speed test and WiFi speed test results are estimates only and may vary based on network conditions and device performance.",

//   keywords:
//     "internet speed test disclaimer, wifi speed test accuracy, broadband speed test disclaimer, network speed test accuracy",

//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/disclaimer",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "TrueInternetSpeedTest Disclaimer",
//     description:
//       "Important disclaimer about internet speed test accuracy, WiFi speed test results and network testing limitations.",
//     url: "https://trueinternetspeedtest.com/disclaimer",
//     siteName: "TrueInternetSpeedTest",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "TrueInternetSpeedTest Disclaimer",
//     description:
//       "Read the disclaimer regarding internet speed test accuracy and network testing results.",
//   },
// };

// export default function DisclaimerPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Header */}

//         <header className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Disclaimer
//           </h1>

//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             This disclaimer explains the limitations of the{" "}
//             <Link href="/" className="text-blue-600 font-medium">
//               internet speed test
//             </Link>{" "}
//             and other network testing tools including the{" "}
//             <Link href="/" className="text-blue-600 font-medium">
//               WiFi speed test
//             </Link>
//             ,{" "}
//             <Link
//               href="/mobile-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               mobile internet speed test
//             </Link>
//             ,{" "}
//             <Link
//               href="/broadband-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               broadband speed test
//             </Link>
//             ,{" "}
//             <Link
//               href="/streaming-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               streaming speed test
//             </Link>
//             , and{" "}
//             <Link
//               href="/gaming-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               gaming speed test
//             </Link>{" "}
//             tools available on TrueInternetSpeedTest.
//           </p>

//           <p className="text-gray-500 mt-4">Last Updated: March 8, 2026</p>
//         </header>

//         {/* Accuracy Section */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Speed Test Results Are Estimates
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
//             The internet speed test provided by TrueInternetSpeedTest measures
//             download speed, upload speed, and latency at the time the test is
//             performed. These results are intended for informational purposes
//             only and should not be considered exact measurements.
//           </p>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             Network performance can vary depending on multiple technical factors
//             including network congestion, device limitations, WiFi signal
//             strength, and server distance.
//           </p>
//         </section>

//         {/* Factors Section */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//             Factors That May Affect Test Accuracy
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-blue-600">
//                 Network Congestion
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 Internet speeds may be lower during peak hours when many users
//                 share the same network infrastructure.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-green-600">
//                 Device Performance
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 Older devices or limited hardware performance may affect the
//                 accuracy of speed test results.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-purple-600">
//                 WiFi Signal Strength
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 Weak wireless signals or long distances from the router can
//                 reduce WiFi speed test results.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-indigo-600">
//                 Multiple Devices
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 When several devices share the same connection, available
//                 bandwidth is divided between them.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Liability */}

//         <section className="mb-14 bg-blue-50 dark:bg-blue-900/20 p-10 rounded-2xl">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Limitation of Liability
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TrueInternetSpeedTest provides its tools and services on an "as-is"
//             basis without warranties of any kind. We do not guarantee that speed
//             test results will match the performance promised by your internet
//             service provider.
//           </p>
//         </section>

//         {/* CTA */}

//         <section className="text-center mb-14">
//           <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//             Run Your Internet Speed Test
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
//             >
//               Start Speed Test
//             </Link>

//             <Link
//               href="/mobile-speed-test"
//               className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
//             >
//               internet speed test mobile
//             </Link>
//           </div>
//         </section>
//       </div>

//       {/* Structured Data */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "TrueInternetSpeedTest Disclaimer",
//             url: "https://trueinternetspeedtest.com/disclaimer",
//           }),
//         }}
//       />
//     </div>
//   );
// }




import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - TrueInternetSpeedTest | Internet Speed Test Accuracy",
  description:
    "Disclaimer for TrueInternetSpeedTest.com. Internet speed test and WiFi speed test results are estimates only and may vary based on network conditions and device performance.",

  keywords:
    "internet speed test disclaimer, wifi speed test accuracy, broadband speed test disclaimer, network speed test accuracy",

  authors: [{ name: "TrueInternetSpeedTest Team" }],
  creator: "TrueInternetSpeedTest",
  publisher: "TrueInternetSpeedTest",

  alternates: {
    canonical: "https://trueinternetspeedtest.com/disclaimer",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "TrueInternetSpeedTest Disclaimer",
    description:
      "Important disclaimer about internet speed test accuracy, WiFi speed test results and network testing limitations.",
    url: "https://trueinternetspeedtest.com/disclaimer",
    siteName: "TrueInternetSpeedTest",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TrueInternetSpeedTest Disclaimer",
    description:
      "Read the disclaimer regarding internet speed test accuracy and network testing results.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Disclaimer
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            This disclaimer explains the limitations of the{" "}
            <Link href="/" className="text-blue-600 font-medium">
              internet speed test
            </Link>{" "}
            and other network testing tools including the{" "}
            <Link href="/" className="text-blue-600 font-medium">
              WiFi speed test
            </Link>
            ,{" "}
            <Link href="/mobile-speed-test" className="text-blue-600 font-medium">
              mobile internet speed test
            </Link>
            ,{" "}
            <Link
              href="/broadband-speed-test"
              className="text-blue-600 font-medium"
            >
              broadband speed test
            </Link>
            ,{" "}
            <Link
              href="/streaming-speed-test"
              className="text-blue-600 font-medium"
            >
              streaming speed test
            </Link>
            , and{" "}
            <Link
              href="/gaming-speed-test"
              className="text-blue-600 font-medium"
            >
              gaming speed test
            </Link>{" "}
            tools available on TrueInternetSpeedTest.
          </p>

          <p className="text-gray-500 mt-4">Last Updated: March 8, 2026</p>
        </header>

        {/* Accuracy Section */}

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Speed Test Results Are Estimates
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            The internet speed test provided by TrueInternetSpeedTest measures
            download speed, upload speed, and latency at the time the test is
            performed. These results are intended for informational purposes
            only and should not be considered exact measurements.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Network performance can vary depending on multiple technical factors
            including network congestion, device limitations, WiFi signal
            strength, and server distance.
          </p>
        </section>

        {/* Factors Section */}

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Factors That May Affect Test Accuracy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Network Congestion
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Internet speeds may be lower during peak hours when many users
                share the same network infrastructure.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-green-600">
                Device Performance
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Older devices or limited hardware performance may affect the
                accuracy of speed test results.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">
                WiFi Signal Strength
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Weak wireless signals or long distances from the router can
                reduce WiFi speed test results.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 text-indigo-600">
                Multiple Devices
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                When several devices share the same connection, available
                bandwidth is divided between them.
              </p>
            </div>

          </div>
        </section>

        {/* Liability */}

        <section className="mb-14 bg-blue-50 dark:bg-blue-900/20 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Limitation of Liability
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            TrueInternetSpeedTest provides its tools and services on an "as-is"
            basis without warranties of any kind. We do not guarantee that speed
            test results will match the performance promised by your internet
            service provider.
          </p>
        </section>

        {/* CTA */}

        <section className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Run Your Internet Speed Test
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Start Speed Test
            </Link>

            <Link
              href="/mobile-speed-test"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Internet Speed Test Mobile
            </Link>

          </div>
        </section>

      </div>

      {/* Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TrueInternetSpeedTest Disclaimer",
            url: "https://trueinternetspeedtest.com/disclaimer",
            publisher: {
              "@type": "Organization",
              name: "TrueInternetSpeedTest",
              url: "https://trueinternetspeedtest.com",
            },
          }),
        }}
      />
    </div>
  );
}
