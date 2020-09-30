import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'appln',
    loadChildren: () => import('./appln/appln.module').then( m => m.ApplnPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'help2',
    loadChildren: () => import('./help2/help2.module').then( m => m.Help2PageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'dob',
    loadChildren: () => import('./dob/dob.module').then( m => m.DobPageModule)
  },
  {
    path: 'pincode',
    loadChildren: () => import('./pincode/pincode.module').then( m => m.PincodePageModule)
  },
  {
    path: 'instant',
    loadChildren: () => import('./instant/instant.module').then( m => m.InstantPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'exm',
    loadChildren: () => import('./exm/exm.module').then( m => m.ExmPageModule)
  },
  {
    path: 'wait',
    loadChildren: () => import('./wait/wait.module').then( m => m.WaitPageModule)
  },
  {
    path: 'credit',
    loadChildren: () => import('./credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./facebook/facebook.module').then( m => m.FacebookPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'flexi',
    loadChildren: () => import('./flexi/flexi.module').then( m => m.FlexiPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'online',
    loadChildren: () => import('./online/online.module').then( m => m.OnlinePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'legal1',
    loadChildren: () => import('./legal1/legal1.module').then( m => m.Legal1PageModule)
  },
  {
    path: 'legal2',
    loadChildren: () => import('./legal2/legal2.module').then( m => m.Legal2PageModule)
  },
  {
    path: 'legal3',
    loadChildren: () => import('./legal3/legal3.module').then( m => m.Legal3PageModule)
  },
  {
    path: 'creditlimit',
    loadChildren: () => import('./creditlimit/creditlimit.module').then( m => m.CreditlimitPageModule)
  },
  {
    path: 'creditlimit1',
    loadChildren: () => import('./creditlimit1/creditlimit1.module').then( m => m.Creditlimit1PageModule)
  },
  {
    path: 'creditlimit2',
    loadChildren: () => import('./creditlimit2/creditlimit2.module').then( m => m.Creditlimit2PageModule)
  },
  {
    path: 'creditlimit3',
    loadChildren: () => import('./creditlimit3/creditlimit3.module').then( m => m.Creditlimit3PageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  },
  {
    path: 'loan1',
    loadChildren: () => import('./loan1/loan1.module').then( m => m.Loan1PageModule)
  },
  {
    path: 'loan2',
    loadChildren: () => import('./loan2/loan2.module').then( m => m.Loan2PageModule)
  },
  {
    path: 'loan3',
    loadChildren: () => import('./loan3/loan3.module').then( m => m.Loan3PageModule)
  },
  {
    path: 'loan4',
    loadChildren: () => import('./loan4/loan4.module').then( m => m.Loan4PageModule)
  },
  {
    path: 'loan5',
    loadChildren: () => import('./loan5/loan5.module').then( m => m.Loan5PageModule)
  },
  {
    path: 'loan6',
    loadChildren: () => import('./loan6/loan6.module').then( m => m.Loan6PageModule)
  },
  {
    path: 'repayment',
    loadChildren: () => import('./repayment/repayment.module').then( m => m.RepaymentPageModule)
  },
  {
    path: 'repay1',
    loadChildren: () => import('./repay1/repay1.module').then( m => m.Repay1PageModule)
  },
  {
    path: 'repay2',
    loadChildren: () => import('./repay2/repay2.module').then( m => m.Repay2PageModule)
  },
  {
    path: 'repay3',
    loadChildren: () => import('./repay3/repay3.module').then( m => m.Repay3PageModule)
  },
  {
    path: 'repay4',
    loadChildren: () => import('./repay4/repay4.module').then( m => m.Repay4PageModule)
  },
  {
    path: 'repay5',
    loadChildren: () => import('./repay5/repay5.module').then( m => m.Repay5PageModule)
  },
  {
    path: 'repay6',
    loadChildren: () => import('./repay6/repay6.module').then( m => m.Repay6PageModule)
  },
  {
    path: 'repay7',
    loadChildren: () => import('./repay7/repay7.module').then( m => m.Repay7PageModule)
  },
  {
    path: 'repay8',
    loadChildren: () => import('./repay8/repay8.module').then( m => m.Repay8PageModule)
  },
  {
    path: 'repay9',
    loadChildren: () => import('./repay9/repay9.module').then( m => m.Repay9PageModule)
  },
  {
    path: 'disbursal',
    loadChildren: () => import('./disbursal/disbursal.module').then( m => m.DisbursalPageModule)
  },
  {
    path: 'dis1',
    loadChildren: () => import('./dis1/dis1.module').then( m => m.Dis1PageModule)
  },
  {
    path: 'dis2',
    loadChildren: () => import('./dis2/dis2.module').then( m => m.Dis2PageModule)
  },
  {
    path: 'dis3',
    loadChildren: () => import('./dis3/dis3.module').then( m => m.Dis3PageModule)
  },
  {
    path: 'dis4',
    loadChildren: () => import('./dis4/dis4.module').then( m => m.Dis4PageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'verify1',
    loadChildren: () => import('./verify1/verify1.module').then( m => m.Verify1PageModule)
  },
  {
    path: 'verify2',
    loadChildren: () => import('./verify2/verify2.module').then( m => m.Verify2PageModule)
  },
  {
    path: 'verify3',
    loadChildren: () => import('./verify3/verify3.module').then( m => m.Verify3PageModule)
  },
  {
    path: 'verify4',
    loadChildren: () => import('./verify4/verify4.module').then( m => m.Verify4PageModule)
  },
  {
    path: 'query',
    loadChildren: () => import('./query/query.module').then( m => m.QueryPageModule)
  },
  {
    path: 'query1',
    loadChildren: () => import('./query1/query1.module').then( m => m.Query1PageModule)
  },
  {
    path: 'writemsg',
    loadChildren: () => import('./writemsg/writemsg.module').then( m => m.WritemsgPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
